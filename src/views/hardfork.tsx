import "@radix-ui/themes/styles.css";
import {
    Button,
    Card,
    Container,
    Flex,
    Heading,
    HoverCard,
    Link,
    Text,
    Tooltip,
} from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa";
import { FC, useEffect, useState } from "react";
import {
    GenesisPosConfig,
    getPosConfigFromGenesis,
} from "@/modules/probe/contracts/addresses";
import Countdown from "@/components/countdown";
import { hardforks, SupportedChainId } from "@/modules/hardfork";
import { createPublicClient, http } from "viem";
import { chain } from "@/modules/probe/chain";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiCheckeredFlag } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { GoArrowRight } from "react-icons/go";

export const HardforkView: FC<{ chainId: SupportedChainId }> = ({
    chainId,
}) => {
    const client = createPublicClient({
        chain: chain[chainId],
        transport: http(),
    });

    const [time, setTime] = useState(0);
    const [blockNumber, setBlockNumber] = useState<bigint>();
    const [config, setConfig] = useState<GenesisPosConfig>();
    async function fetchConfig() {
        const config = await getPosConfigFromGenesis(chainId);
        setConfig(config);
    }
    function setCountdownTime() {
        setTime(hardforks[chainId].timestamp * 1000);
    }
    useEffect(() => {
        fetchConfig();
        setCountdownTime();

        const unwatch = client.watchBlockNumber({
            onBlockNumber: async (blockNumber) => {
                setBlockNumber(blockNumber);
            },
            pollingInterval: 200,
        });
        return () => {
            unwatch();
        };
    }, []);
    if (!time || !blockNumber || !config) {
        return null;
    }

    return (
        <>
            <Flex
                style={{
                    height: "100dvh",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "40px",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: "24px",
                        left: "0",
                        right: "0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <a href={chainId === 96 ? "/testnet" : "/"} style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}>
                        <Button
                            variant="ghost"
                            color="gray"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                borderRadius: "30px",
                                textTransform: "uppercase",
                                letterSpacing: "0.13rem",
                            }}
                        >
                            Switch to {chainId === 96 ? "Testnet" : "Mainnet"}{" "}
                            Clock
                            <GoArrowRight size="22px"/>
                        </Button>
                    </a>
                </div>
                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    gap="12px"
                >
                    <Heading
                        style={{
                            fontSize: "max(5dvw, 50px)",
                            letterSpacing: "-0.05em",
                            lineHeight: "1",
                            fontWeight: 900,
                        }}
                    >
                        KUB
                    </Heading>
                    <Text
                        as="span"
                        style={{
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            fontSize: "max(1.3dvw, 22px)",
                            opacity: 0.7,
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        Lausanne Upgrade {chainId === 25925 ? "Testnet" : ""}
                    </Text>
                </Flex>
                <div>
                    <Countdown timestamp={time} />
                </div>
                <Flex align="center" gap="6px">
                    <GiCheckeredFlag />
                    <Text color="gray">
                        <Text as="span" color="jade">
                            <b>
                                {(
                                    BigInt(config.lausanneBlock) - blockNumber
                                ).toLocaleString()}{" "}
                            </b>
                        </Text>
                        blocks until hard fork begins
                    </Text>
                </Flex>
                <Flex align="center" gap="6px">
                    <SiHiveBlockchain />
                    <Text color="gray">{blockNumber.toLocaleString()}</Text>
                    <IoArrowForwardOutline />
                    <Text color="gray">
                        {config.lausanneBlock.toLocaleString()}
                    </Text>
                </Flex>
                <div style={{ cursor: "pointer" }}>
                    <Link
                        href="https://github.com/kub-chain/bkc"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontSize: "2rem",
                            display: "block",
                            alignItems: "center",
                            gap: "1rem",
                            cursor: "pointer",
                            opacity: 0.8,
                        }}
                    >
                        <FaGithub
                            style={{
                                cursor: "pointer",
                            }}
                        />
                    </Link>
                </div>
            </Flex>
            <Container
                style={{
                    minHeight: "200px",
                    backgroundColor: "#00000060",
                    backdropFilter: "blur(10px)",
                    padding: "50px",
                }}
            >
                <Text size="3">
                    <strong>Related Resources</strong>
                </Text>
                <Flex gap="8" mt="4">
                    <Link
                        href="https://github.com/kub-chain/bkc/releases/tag/v2.3.0-bkc"
                        color="gray"
                        size="2"
                    >
                        Release Note
                    </Link>
                    <Link
                        href="https://github.com/kub-chain/bkc"
                        color="gray"
                        size="2"
                    >
                        Source Code
                    </Link>
                </Flex>
            </Container>
        </>
    );
};
