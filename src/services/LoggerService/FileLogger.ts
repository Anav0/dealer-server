import fs from "fs";
import {ILogger} from "./ILogger";
import {LoggerLevels} from "./LoggerLevels";

export class FileLogger implements ILogger {
    private readonly fileName: string
    static BASE_PATH = 'src/logs/'

    constructor(fileName: string) {
        this.fileName = fileName
    }

    log(level: LoggerLevels, msg: string, time: Date): Promise<void> {
        return new Promise((resolve, reject) => {
            const content = `${time.toLocaleDateString('en-GB', {
                hour12: false,
                hour: '2-digit',
                second: '2-digit',
                minute: '2-digit'
            })}\t${LoggerLevels[level]}:\t${msg}\n`
            fs.appendFile(FileLogger.BASE_PATH + this.fileName, content, (error) => {
                if (error) {
                    console.error(error)
                    reject(error)
                }
                resolve()
            })
        })
    }
}