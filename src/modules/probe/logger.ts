import winston from "winston";

const formatKeyValueMeta = (meta: Record<string, unknown>) => {
    return Object.entries(meta)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join(" ");
};

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, level, message, ...meta }) => {
            const metaStr = formatKeyValueMeta(meta);
            return `[${timestamp}] ${level}: ${message}${
                metaStr ? " " + metaStr : ""
            }`;
        })
    ),
    transports: [new winston.transports.Console()],
});
