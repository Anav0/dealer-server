import {IProducerService} from "./IProducerService";
import {Producer, ProducerModel} from "../../common/models/producer";

export default class MongoProducerService implements IProducerService{

    async getById(id: string): Promise<Producer> {
        return ProducerModel.findById(id)
    }

}