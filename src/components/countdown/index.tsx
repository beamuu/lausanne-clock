import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

interface CountdownProps {
    timestamp: number; // Unix timestamp in milliseconds
}

const Countdown: React.FC<CountdownProps> = ({ timestamp }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = Date.now();
        const difference = timestamp - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [timestamp]);

    return (
        <Flex style={{ gap: "6px", justifyContent: "center" }}>
            <NumberCard number={timeLeft.days} label="Days" left />
            <NumberCard number={timeLeft.hours} label="Hours" />
            <NumberCard number={timeLeft.minutes} label="Minutes" />
            <NumberCard number={timeLeft.seconds} label="Seconds" right />
        </Flex>
    );
};

const NumberCard: React.FC<{
    number: number;
    label: string;
    left?: boolean;
    right?: boolean;
}> = ({ number, label, left, right }) => {
    const CardContent = (
        <>
            <Heading
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "max(5dvw, 50px)",
                }}
            >
                {number}
            </Heading>
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <Text color="gray" size="2">
                    {label}
                </Text>
            </div>
        </>
    );
    if (left) {
        return <StyledCardLeft>{CardContent}</StyledCardLeft>;
    } else if (right) {
        return <StyledCardRight>{CardContent}</StyledCardRight>;
    } else {
        return <StyledCard>{CardContent}</StyledCard>;
    }
};

const cardBorderRadius = "5dvw";

const StyledCard = styled.div`
    padding: 20px;
    text-align: center;
    width: 12dvw;
    max-width: 140px;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ffffff10;
    border-radius: 0;
    // for mobile
    @media (max-width: 768px) {
        aspect-ratio: 1/2;
    }
`;

const StyledCardLeft = styled(StyledCard)`
    border-radius: ${cardBorderRadius} 0 0 ${cardBorderRadius};
`;

const StyledCardRight = styled(StyledCard)`
    border-radius: 0 ${cardBorderRadius} ${cardBorderRadius} 0;
`;

export default Countdown;
