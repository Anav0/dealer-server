import express from "express";
import categoriesEndpoints from "./routes/categories";
import productEndpoints from "./routes/product";
import activeService from "./services/activeServices";
import cors from "cors";
const app = express();
const port = 8080; // default port to listen

app.use(cors())

app.use('/categories',categoriesEndpoints);
app.use('/products',productEndpoints);

// Error handler
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen( port, async () => {
    const dbConn = activeService.getDbConnectionService();
    await dbConn.connect();
} );