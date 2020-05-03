import fs from "fs";
import {ILogger} from "../common/logger/ILogger";
import {LoggerLevels} from "../common/logger/LoggerLevels";

export class FileLogger implements ILogger {
    private readonly fileName: string

    constructor(fileName: string) {
        this.fileName = fileName
    }

    log(level: LoggerLevels, msg: string, time: Date): Promise<void> {
        return new Promise((resolve, reject) => {
            const content = `${time.toLocaleDateString('en-GB')}\t${LoggerLevels[level]}:\t${msg}\n`
            fs.appendFile(this.fileName, content, (error) => {
                if (error) {
                    console.error(error)
                    reject(error)
                }
                resolve()
            })
        })
    }
}