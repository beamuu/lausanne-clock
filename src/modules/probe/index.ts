import { http, createPublicClient, stringify, Hex, hexToBigInt } from "viem";
import { ContractFactory } from "./contracts";
import { local } from "./chain";
import { createStorageLookupJobs } from "./storage-jobs";
import { compareStorage, StorageLookupTarget, StorageMap } from "./storage";
import { createInterfacesTest, InterfaceTest } from "./interface-jobs";
import { createMarkdownDocument, generateMarkdownTable } from "./utils/string";
import { logger } from "./logger";
import { saveToFile } from "./utils/fs";

const startTime = new Date();

const client = createPublicClient({
    chain: local,
    transport: http(),
});

async function getStorageSlots(
    jobs: StorageLookupTarget[],
    blockNumber: bigint
) {
    const sto: StorageMap = {};

    for (const { key, slots } of jobs) {
        for (const { slot, additional } of slots) {
            const storageValue = await client.getStorageAt({
                address: key,
                slot,
                blockNumber,
            });
            if (!storageValue) {
                throw new Error(
                    `Storage value is null for key: ${key}, slot: ${slot}`
                );
            }
            if (!sto[key]) {
                sto[key] = {};
            }
            sto[key][slot] = { slot: storageValue, additional };
        }
    }
    return sto;
}

async function main() {
    if (!process.env.STAKE_MANAGER) {
        throw new Error("STAKE_MANAGER environment variable is not set");
    }
    if (!process.env.STAKE_MANAGER_STORAGE) {
        throw new Error(
            "STAKE_MANAGER_STORAGE environment variable is not set"
        );
    }
    if (!process.env.SLASH_MANAGER) {
        throw new Error("SLASH_MANAGER environment variable is not set");
    }
    if (!process.env.LAUSANNE_BLOCK) {
        throw new Error("LAUSANNE_BLOCK environment variable is not set");
    }

    const lausanneBlock = BigInt(process.env.LAUSANNE_BLOCK); // Changed to BigInt
    const factory = new ContractFactory();
    const stakeManager = factory.stakeManager(process.env.STAKE_MANAGER);
    const stakeManagerStorage = factory.stakeManagerStorage(
        process.env.STAKE_MANAGER_STORAGE
    );
    const slashManager = factory.slashManager(process.env.SLASH_MANAGER);

    const jobs = createStorageLookupJobs({
        stakeManager: stakeManager.address,
        stakeManagerStorage: stakeManagerStorage.address,
        slashManager: slashManager.address,
    });

    const infs = createInterfacesTest({
        stakeManager,
        slashManager,
        stakeManagerStorage,
    });

    const unwatch = client.watchBlockNumber({
        onBlockNumber: async (blockNumber) => {
            logger.info(`New block incomming ${blockNumber.toLocaleString()}`);
            const testAttemped = (blockNumber - lausanneBlock) / 12n
            if (
                blockNumber >= lausanneBlock && (blockNumber - lausanneBlock) % 12n === 0n
            ) {
                await tests(jobs, infs, lausanneBlock - 1n, lausanneBlock, testAttemped);
            }
            if (blockNumber > lausanneBlock && testAttemped >= 5n) {
                unwatch();
                await tests(jobs, infs, lausanneBlock - 1n, lausanneBlock, testAttemped);
            }
        },
        pollingInterval: 200,
    });
}

async function tests(
    jobs: StorageLookupTarget[],
    infs: InterfaceTest[],
    a: bigint,
    b: bigint,
    id: bigint,
) {
    logger.info(`Test #${id} ${a} ${b}`);
    const storagesReport = await testStorages(jobs, a, b);
    const interfacesReport = await testInterfaces(infs, a, b);
    const doc = createMarkdownDocument([
        `## Report ${id} (${a}, ${b})`,
        "### Storages",
        storagesReport,
        "### Interfaces",
        interfacesReport,
    ]);
    const fileName = `./reports/${startTime.toISOString()}.md`;
    // Save file
    saveToFile(fileName, doc);
}

async function testStorages(
    jobs: StorageLookupTarget[],
    a: bigint,
    b: bigint
): Promise<string> {
    const pre = await getStorageSlots(jobs, a);
    const post = await getStorageSlots(jobs, b);
    const diff = compareStorage(pre, post);
    const diffReport = [
        ["Address", "Slot", "Pre", "Post", "Ok", "Message", "Additional"],
    ];
    for (const each of Object.keys(diff)) {
        for (const slot of Object.keys(diff[each as Hex])) {
            const { pre, post, ok, msg } = diff[each as Hex][slot as Hex];
            diffReport.push([
                each,
                hexToBigInt(slot as Hex).toString(),
                pre.slot,
                post.slot,
                `${ok}`,
                msg || "",
                pre.additional ? "yes" : "-",
            ]);
        }
    }
    for (const each of Object.keys(diff)) {
        for (const slot of Object.keys(diff[each as Hex])) {
            if (!diff[each as Hex][slot as Hex].ok) {
                const preValue = pre[each as Hex][slot as Hex].slot;
                const postValue = post[each as Hex][slot as Hex].slot;
                logger.error(
                    `Mismatch in storage: ${each} ${hexToBigInt(slot as Hex)} ${preValue}(${hexToBigInt(preValue)}) !== ${postValue}(${hexToBigInt(postValue)})`
                );
            }
        }
    }
    return generateMarkdownTable(diffReport);
}

async function testInterfaces(
    infs: InterfaceTest[],
    a: bigint,
    b: bigint
): Promise<string> {
    const results: [unknown, unknown][] = [];
    const resultReport = [["Address", "Function", "Pre", "Post"]];
    for (const { address, abi, functionName } of infs) {
        const r1 = await client.readContract({
            address,
            abi,
            functionName,
            blockNumber: a,
        });
        const r2 = await client.readContract({
            address,
            abi,
            functionName,
            blockNumber: b,
        });
        results.push([r1, r2]);
        resultReport.push([
            address,
            functionName,
            stringify(r1),
            stringify(r2),
        ]);
    }
    for (const each of results) {
        if (each[0] !== each[1]) {
            logger.error(`Mismatch in results: ${each[0]} !== ${each[1]}`);
        }
    }
    return generateMarkdownTable(resultReport);
}

main();
