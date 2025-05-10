import { Address, Hex } from "viem";

export type SlotOption = {
    slot: Hex;
    additional?: boolean;
};

export type StorageMap = { [key: Hex]: { [key: Hex]: SlotOption } };

export type StorageDiff = {
    [key: Hex]: {
        [key: Hex]: {
            pre: SlotOption;
            post: SlotOption;
            ok: boolean;
            msg?: string;
        };
    };
};

export type StorageLookupTarget = {
    key: Hex;
    slots: SlotOption[];
};

export function compareStorage(
    preStorage: StorageMap,
    postStorage: StorageMap
): StorageDiff {
    const changes: StorageDiff = {};

    for (let key in preStorage) {
        let k = key as Address;
        if (!postStorage[k]) continue;

        for (const slot in preStorage[k]) {
            let s = slot as Hex;
            if (!changes[k]) changes[k] = {};
            if (
                !preStorage[k][s].additional &&
                preStorage[k][s].slot !== postStorage[k][s].slot
            ) {
                // Check if the slot is not additional
                // and if the slot values are different
                
                changes[k][s] = {
                    pre: preStorage[k][s],
                    post: postStorage[k][s],
                    ok: false,
                    msg: "should be the same",
                };
            } else if (
                preStorage[k][s].additional &&
                preStorage[k][s].slot === postStorage[k][s].slot
            ) {
                // Check if the slot is additional
                // and if the slot values are the same)
                changes[k][s] = {
                    pre: preStorage[k][s],
                    post: postStorage[k][s],
                    ok: false,
                    msg: "should not be the same",
                };
            } else {
                changes[k][s] = {
                    pre: preStorage[k][s],
                    post: postStorage[k][s],
                    ok: true,
                };
            }
        }
    }

    return changes;
}
