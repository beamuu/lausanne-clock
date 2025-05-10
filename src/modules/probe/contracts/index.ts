import { SLASH_MANAGER } from "./slash-manager";
import { STAKE_MANAGER } from "./stake-manager";
import { STAKE_MANAGER_STORAGE } from "./stake-manager-storage";

export class ContractFactory {
    stakeManager(address: string) {
        return { address: this.parseAddress(address), abi: STAKE_MANAGER.abi };
    }
    stakeManagerStorage(address: string) {
        return {
            address: this.parseAddress(address),
            abi: STAKE_MANAGER_STORAGE.abi,
        };
    }
    slashManager(address: string) {
        return { address: this.parseAddress(address), abi: SLASH_MANAGER.abi };
    }
    private parseAddress(address: string) {
        if (address.startsWith("0x")) {
            return address as `0x${string}`;
        }
        throw new Error(`Invalid address: ${address}`);
    }
}
