import express from "express";
import categoriesEndpoints from "./routes/categories";
import productEndpoints from "./routes/product";
import paymentEndpoints from "./routes/payment";
import activeService from "./services/activeServices";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config()
const app = express();
const port = 8080;


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/categories', categoriesEndpoints);
app.use('/products', productEndpoints);
app.use('/payment', paymentEndpoints);

// Error handler
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(port, async () => {
    const dbConn = activeService.getDbConnectionService();
    await dbConn.connect();
});