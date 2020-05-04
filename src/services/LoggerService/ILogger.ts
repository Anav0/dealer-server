import {LoggerLevels} from "./LoggerLevels";

export interface ILogger {
    log(level: LoggerLevels, msg: string, time: Date): Promise<void>
}