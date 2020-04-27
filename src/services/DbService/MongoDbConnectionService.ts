import mongoose from "mongoose";
import {IDbConnectionService} from "./IDbConnectionService";

export class MongoDbConnectionService implements IDbConnectionService {
    public conn: mongoose.Mongoose;

    async connect(): Promise<void> {
        this.conn = await mongoose.connect('mongodb://localhost:27017/admin', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
}