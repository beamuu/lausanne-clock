import { Address, Hex } from "viem";
import { StorageLookupTarget } from "./storage";
import { bigIntToHex } from "./utils/hex";

export function createStorageLookupJobs({
    stakeManager,
    slashManager,
    stakeManagerStorage,
}: {
    stakeManager: Address;
    stakeManagerStorage: Address;
    slashManager: Address;
}): StorageLookupTarget[] {
    return [
        {
            key: stakeManager,
            slots: [
                { slot: bigIntToHex(0n) },
                { slot: bigIntToHex(1n) },
                { slot: bigIntToHex(2n) },
                { slot: bigIntToHex(3n) },
                { slot: bigIntToHex(4n) },
                { slot: bigIntToHex(5n), additional: true },
                { slot: bigIntToHex(6n), additional: true },
                { slot: bigIntToHex(7n), additional: true },
                { slot: bigIntToHex(8n), additional: true },
            ],
        },
        {
            key: stakeManagerStorage,
            slots: [
                { slot: bigIntToHex(0n) },
                { slot: bigIntToHex(1n) },
                { slot: bigIntToHex(2n) },
                { slot: bigIntToHex(3n) },
                { slot: bigIntToHex(4n) },
                { slot: bigIntToHex(5n) },
                { slot: bigIntToHex(6n) },
                { slot: bigIntToHex(7n) },
                { slot: bigIntToHex(8n) },
                { slot: bigIntToHex(9n) },
                { slot: bigIntToHex(10n) },
                { slot: bigIntToHex(11n) },
                { slot: bigIntToHex(12n) },
                { slot: bigIntToHex(13n) },
                { slot: bigIntToHex(14n) },
                { slot: bigIntToHex(15n) },
                { slot: bigIntToHex(16n) },
                { slot: bigIntToHex(17n) },
                { slot: bigIntToHex(18n) },
                { slot: bigIntToHex(19n) },
                { slot: bigIntToHex(20n) },
                { slot: bigIntToHex(21n) },
                { slot: bigIntToHex(22n) },
                { slot: bigIntToHex(23n) },
                { slot: bigIntToHex(24n), additional: true },
                { slot: bigIntToHex(25n), additional: true },
                { slot: bigIntToHex(26n), additional: true },
                { slot: bigIntToHex(27n), additional: true },
                { slot: bigIntToHex(28n), additional: true },
                { slot: bigIntToHex(29n), additional: true },
            ],
        },
        {
            key: slashManager,
            slots: [
                { slot: bigIntToHex(0n) },
                { slot: bigIntToHex(1n) },
                { slot: bigIntToHex(2n) },
                { slot: bigIntToHex(3n), additional: true },
            ],
        },
    ];
}
