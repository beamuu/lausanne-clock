// Address book

export type KubPosAddresses = {
    stakeManager: string;
    stakeManagerStorage: string;
    slashManager: string;
};

export type GenesisPosConfig = {
    lausanneBlock: number;
    validatorContract: string;
}

async function pullChainGenesis(chainId: number) {
    let url = "";
    switch (chainId) {
        case 96:
            url =
                "https://raw.githubusercontent.com/kub-chain/bkc-node/refs/heads/main/mainnet/genesis.json";
            break;
        case 25925:
            url =
                "https://raw.githubusercontent.com/kub-chain/bkc-node/refs/heads/main/testnet/genesis.json";
            break;
        default:
            throw new Error(`Unsupported chain ID: ${chainId}`);
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch genesis file: ${response.statusText}`
        );
    }
    const genesis = await response.json();
    return genesis;
}

function validateGenesis(genesis: any): GenesisPosConfig {
    let selectedValidatorContract = ""
    
    const { config } = genesis;
    if (!config) {
        throw new Error("Config section not found in genesis file");
    }
    
    const { lausanneBlock, clique } = config;
    if (!lausanneBlock) {
        throw new Error("Lausanne block not found in genesis file");
    }
    if (typeof lausanneBlock !== "number") {
        throw new Error("Lausanne block is not a number");
    }
    if (!clique) {
        throw new Error("Clique section not found in genesis file");
    }

    const { validatorContract, validatorContractV2 } = clique;
    if (!validatorContract) {
        throw new Error("Validator contract not found in genesis file");
    }
    if (validatorContractV2) {
        selectedValidatorContract = validatorContractV2;
    } else {
        selectedValidatorContract = validatorContract;
    }


    return {
        lausanneBlock: lausanneBlock,
        validatorContract: selectedValidatorContract,
    };
}

export async function getPosConfigFromGenesis(
    chainId: number
): Promise<GenesisPosConfig> {
    const genesis = await pullChainGenesis(chainId);
    const config = validateGenesis(genesis);
    return config;
}
