import { Address } from "viem";

export type StateObject = {
    committee: Address;
    stakeManager: Address;
    nftContract: Address;
    validatorShareFactory: Address;
    slashManager: Address;
    soloLimit: bigint;
    soloAmount: bigint;
    poolLimit: bigint;
    poolAmount: bigint;
    officialLimit: bigint;
    officialAmount: bigint;
    defaultInfraCommissionRate: bigint;
    totalStaked: bigint;
    totalRewards: bigint;
    totalRewardsLiquidated: bigint;
    poolSlashAmount: bigint;
    unallocatedReward: bigint;
    soloSlashRate?: bigint; // Optional as indicated by "-"
    minimumPoolStake?: bigint; // Optional as indicated by "-"
    minimumPoolDelegate?: bigint; // Optional as indicated by "-"
    minimumSoloStake?: bigint; // Optional as indicated by "-"
    slashEpochThreshold?: bigint; // Optional as indicated by "-"
    slashEpochSize?: bigint; // Optional as indicated by "-"
};
