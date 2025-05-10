export function bigIntToHex(value: bigint): `0x${string}` {
    const hex = value.toString(16);
    return `0x${hex.padStart(64, "0")}` as `0x${string}`;
}

export function hexToBigInt(hex: `0x${string}`): bigint {
    if (hex.length !== 66) {
        throw new Error(`Invalid hex length: ${hex}`);
    }
    return BigInt(hex);
}