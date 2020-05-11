import express from "express";
import categoriesEndpoints from "./routes/categories";
import productEndpoints from "./routes/product";
import paymentEndpoints from "./routes/payment";
import activeService from "./services/activeServices";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import {FileLogger} from "./services/LoggerService/FileLogger";
import {LoggerLevels} from "./services/LoggerService/LoggerLevels";
import {ILogger} from "./services/LoggerService/ILogger";

const logger: ILogger = new FileLogger('general.txt')
dotenv.config()
const app = express();
const port = 80;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/categories', categoriesEndpoints);
app.use('/products', productEndpoints);
app.use('/payment', paymentEndpoints);

// Error handler
app.use(async (err, req, res, next) => {
    await logger.log(LoggerLevels.Error, err.message, new Date())
    res.status(500).send(err.message)
})

app.listen(port, async () => {
    const dbConn = activeService.getDbConnectionService();
    await dbConn.connect();
    await logger.log(LoggerLevels.Info, 'Server started', new Date())
});