export const SLASH_MANAGER = {
    abi: [
        {
            type: "constructor",
            inputs: [
                {
                    name: "stakeManagerStorage_",
                    type: "address",
                    internalType: "address",
                },
                {
                    name: "initialSpanBlock_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "SPAN",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "calculateTransitionSpanCommitmentBlock",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "currentSpanNumber",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "epoch",
            inputs: [{ name: "", type: "address", internalType: "address" }],
            outputs: [
                {
                    name: "lastEpochStart",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "lastSlash", type: "uint256", internalType: "uint256" },
                { name: "counter", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getCommitmentBlock",
            inputs: [
                { name: "number_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getSpanByBlock",
            inputs: [
                { name: "number_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "getSpanRange",
            inputs: [
                { name: "number_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [
                {
                    name: "startBlock",
                    type: "uint256",
                    internalType: "uint256",
                },
                { name: "endBlock", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "initialSpanBlock",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "isSignerSlashed",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
                { name: "span_", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "maxEpochSize",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "slash",
            inputs: [
                { name: "signer_", type: "address", internalType: "address" },
                {
                    name: "currentSpan_",
                    type: "uint256",
                    internalType: "uint256",
                },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "span",
            inputs: [
                { name: "", type: "address", internalType: "address" },
                { name: "", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "stableSpanBlock",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
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
            name: "threshold",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
        },
        {
            type: "event",
            name: "Slash",
            inputs: [
                {
                    name: "signer",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "span",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "counter",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "StartEpoch",
            inputs: [
                {
                    name: "signer",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "span",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
        {
            type: "event",
            name: "Warn",
            inputs: [
                {
                    name: "signer",
                    type: "address",
                    indexed: true,
                    internalType: "address",
                },
                {
                    name: "span",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
                {
                    name: "counter",
                    type: "uint256",
                    indexed: true,
                    internalType: "uint256",
                },
            ],
            anonymous: false,
        },
    ],
} as const;
