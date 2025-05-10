export const STAKE_MANAGER = {
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "input_",
                    type: "tuple",
                    internalType: "struct StakeManagerConstructorInput",
                    components: [
                        {
                            name: "stakeManagerStorage",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "stakeManagerVault",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "kkub",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "transferRouter",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "committee",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "officialPoolStaker",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "callHelper",
                            type: "address",
                            internalType: "address",
                        },
                    ],
                },
            ],
            stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
            type: "function",
            name: "INCORRECT_VALIDATOR_ID",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "MAX_COMMISSION_RATE",
            inputs: [],
            outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "MAX_INFRA_COMMISSION_RATE",
            inputs: [],
            outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "MAX_RATE",
            inputs: [],
            outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "activate",
            inputs: [
                { name: "_valId", type: "uint256", internalType: "uint256" },
                {
                    name: "_bitkubNext",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "activate",
            inputs: [
                { name: "_valId", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "callHelper",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "claimCommissionRewards",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "claimCommissionRewards",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "claimRewards",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "claimRewards",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "committee",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "delegationDeposit",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "distributeReward",
            inputs: [],
            outputs: [],
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "getMinimalValidatorIndex",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getMinimalValidators",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "tuple[]",
                    internalType: "struct MinimalValidator[]",
                    components: [
                        {
                            name: "signer",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "power",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getMinimalValidatorsByPage",
            inputs: [
                { name: "page_", type: "uint256", internalType: "uint256" },
                { name: "limit_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
                {
                    name: "",
                    type: "tuple[]",
                    internalType: "struct MinimalValidator[]",
                    components: [
                        {
                            name: "signer",
                            type: "address",
                            internalType: "address",
                        },
                        {
                            name: "power",
                            type: "uint256",
                            internalType: "uint256",
                        },
                    ],
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getMinimalValidatorsLength",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getValidatorId",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getValidators",
            inputs: [],
            outputs: [
                { name: "", type: "address[]", internalType: "address[]" },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "kkub",
            inputs: [],
            outputs: [
                { name: "", type: "address", internalType: "contract IKKUB" },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "nftContract",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "contract StakingNFT",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "officialPoolStaker",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "restake",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "restake",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "amount_", type: "uint256", internalType: "uint256" },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "setCallHelper",
            inputs: [
                {
                    name: "_callHelper",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "setCommittee",
            inputs: [
                {
                    name: "_committee",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "setOfficialPoolStaker",
            inputs: [
                {
                    name: "officialPoolStaker_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "setTransferRouter",
            inputs: [
                {
                    name: "_transferRouter",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "slash",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "stake",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
                { name: "delegation_", type: "bool", internalType: "bool" },
                { name: "amount_", type: "uint256", internalType: "uint256" },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "stake",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
                { name: "delegation_", type: "bool", internalType: "bool" },
            ],
            outputs: [],
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "stakeManagerStorage",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "contract IStakeManagerStorageV2",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "stakeManagerVault",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "contract IStakeManagerVault",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "transferFunds",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "amount_", type: "uint256", internalType: "uint256" },
                {
                    name: "delegator_",
                    type: "address",
                    internalType: "address",
                },
                {
                    name: "mode_",
                    type: "uint8",
                    internalType: "enum TransferTokenMode",
                },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "transferInfraCommission",
            inputs: [
                {
                    name: "validatorIds_",
                    type: "uint256[]",
                    internalType: "uint256[]",
                },
                {
                    name: "amounts_",
                    type: "uint256[]",
                    internalType: "uint256[]",
                },
                {
                    name: "to_",
                    type: "address",
                    internalType: "address payable",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "transferRouter",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "contract ITransferRouter",
                },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "transferUnallocatedReward",
            inputs: [
                {
                    name: "to_",
                    type: "address",
                    internalType: "address payable",
                },
                { name: "amount_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "unstake",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "unstake",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "unstakePartial",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "amount_", type: "uint256", internalType: "uint256" },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "unstakePartial",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "amount_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateCommissionRate",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "newCommissionRate_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateCommissionRate",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "newCommissionRate_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateInfraCommissionRate",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "newInfraCommissionRate_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateMinDelegated",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "newMinDelegated_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateMinDelegated",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "newMinDelegated_",
                    type: "uint256",
                    internalType: "uint256",
                },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateValidatorDelegation",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "delegation_", type: "bool", internalType: "bool" },
                {
                    name: "bitkubNext_",
                    type: "address",
                    internalType: "address",
                },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateValidatorDelegation",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "delegation_", type: "bool", internalType: "bool" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "updateValidatorState",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "amount_", type: "int256", internalType: "int256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "withdrawDelegatorsReward",
            inputs: [
                {
                    name: "validatorId_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "nonpayable",
        },
        {
            type: "event",
            name: "CallHelperSet",
            inputs: [
                {
                    name: "oldCallHelper",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "newCallHelper",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "ClaimRewards",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "liquidateMode",
                    type: "uint8",
                    indexed: false,
                    internalType: "enum LiquidateMode",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "CommissionRateUpdated",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "newCommissionRate",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "timestamp",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "CommitteeSet",
            inputs: [
                {
                    name: "oldCommittee",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "newCommittee",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "DelegationUpdated",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "delegation",
                    type: "bool",
                    indexed: false,
                    internalType: "bool",
                },
                {
                    name: "timestamp",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "DeprecatedDeposit",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "validatorStatus",
                    type: "uint8",
                    indexed: false,
                    internalType: "enum Status",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "DistributeRewards",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "totalReward",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "validatorReward",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "delegatorsReward",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "infraCommission",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "validatorCommission",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "delegatorCommission",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "InfraCommissionRateUpdated",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "newInfraCommissionRate",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "timestamp",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "MinDelegatedUpdated",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "newMinDelegation",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "timestamp",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "OfficialPoolStakerSet",
            inputs: [
                {
                    name: "oldOfficialPoolStaker",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "newOfficialPoolStaker",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "SlashFail",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "errorCase",
                    type: "uint8",
                    indexed: true,
                    internalType: "enum SlashErrorCode",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "SlashSuccess",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "isMinimalValidator",
                    type: "bool",
                    indexed: true,
                    internalType: "bool",
                },
                {
                    name: "slashedAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "delegatedAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "TransferInfraCommission",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "TransferRouterSet",
            inputs: [
                {
                    name: "oldTransferRouter",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "newTransferRouter",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "TransferUnallocatedReward",
            inputs: [
                {
                    name: "to",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "caller",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "ValidatorRestaked",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "isMinimalValidator",
                    type: "bool",
                    indexed: true,
                    internalType: "bool",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "ValidatorStaked",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "validator",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "validatorShareContract",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "validatorStatus",
                    type: "uint8",
                    indexed: false,
                    internalType: "enum Status",
                },
                {
                    name: "minDelegated",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "isDelegation",
                    type: "bool",
                    indexed: false,
                    internalType: "bool",
                },
                {
                    name: "isOfficialPool",
                    type: "bool",
                    indexed: false,
                    internalType: "bool",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "ValidatorUnstaked",
            inputs: [
                {
                    name: "validatorId",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "amount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
    ],
} as const;
