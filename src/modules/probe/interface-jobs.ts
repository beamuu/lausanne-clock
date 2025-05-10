import { Abi, Hex } from "viem";

export type InterfaceTest = {
    address: Hex;
    abi: Abi;
    functionName: string;
};

type Contracts = {
    stakeManager: { address: Hex; abi: Abi };
    slashManager: { address: Hex; abi: Abi };
    stakeManagerStorage: { address: Hex; abi: Abi };
};

export function createInterfacesTest(c: Contracts): InterfaceTest[] {
    return [
        {
            address: c.slashManager.address,
            abi: c.slashManager.abi,
            functionName: "threshold",
        },
        {
            address: c.slashManager.address,
            abi: c.slashManager.abi,
            functionName: "maxEpochSize",
        },
        
        {
            address: c.stakeManagerStorage.address,
            abi: c.stakeManagerStorage.abi,
            functionName: "soloSlashRate",
        },
        {
            address: c.stakeManager.address,
            abi: c.stakeManager.abi,
            functionName: "stakeManagerStorage",
        },
        {
            address: c.stakeManager.address,
            abi: c.stakeManager.abi,
            functionName: "stakeManagerVault",
        },
        {
            address: c.stakeManager.address,
            abi: c.stakeManager.abi,
            functionName: "nftContract",
        },
        {
            address: c.stakeManager.address,
            abi: c.stakeManager.abi,
            functionName: "kkub",
        },
    ];
}
