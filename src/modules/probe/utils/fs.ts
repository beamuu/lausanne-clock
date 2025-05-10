import * as fs from "fs";
import * as path from "path";

export const saveToFile = (
    filePath: string,
    content: string
): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Ensure directory exists
        fs.mkdir(path.dirname(filePath), { recursive: true }, (dirErr) => {
            if (dirErr) return reject(dirErr);

            // Create write stream
            const stream = fs.createWriteStream(filePath, { flags: "a" });

            stream.on("error", reject);
            stream.on("finish", () => {
                stream.close(); // Properly close
                resolve();
            });

            stream.write(content);
            stream.end();
        });
    });
};
