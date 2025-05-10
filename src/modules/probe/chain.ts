export const kubchain = {
    id: 96,
    name: "KUB Chain",
    network: "kubmainnet",
    nativeCurrency: {
        decimals: 18,
        name: "KUB",
        symbol: "KUB",
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.bitkubchain.io"],
        },
    },
    blockExplorers: {
        default: { name: "KUBScan", url: "https://kubscan.com" },
    },
};

export const kubchainTestnet = {
    id: 25925,
    name: "KUB Chai Testnet",
    network: "kubtestnet",
    nativeCurrency: {
        decimals: 18,
        name: "KUB",
        symbol: "KUB",
    },
    rpcUrls: {
        default: {
            http: ["https://rpc-testnet.bitkubchain.io"],
        },
    },
    blockExplorers: {
        default: { name: "KUBScan", url: "https://testnet.kubscan.com" },
    },
};

export const local = {
    id: 1337,
    name: "Local Chain",
    network: "local",
    nativeCurrency: {
        decimals: 18,
        name: "KUB",
        symbol: "KUB",
    },
    rpcUrls: {
        default: {
            http: ["http://localhost:8545"],
        },
    },
};


export const chain = {
    96: kubchain,
    25925: kubchainTestnet,
    1337: local,
}