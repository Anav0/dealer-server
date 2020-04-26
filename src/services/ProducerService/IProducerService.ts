import {Producer} from "../../common/models/producer";

export interface IProducerService{
    getById(id: string): Promise<Producer>;
}