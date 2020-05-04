import {IProductService} from "./IProductService";
import {Category} from "../../common/models/category";
import {Product, ProductModel} from "../../common/models/product";
import {Producer} from "../../common/models/producer";
import {FileLogger} from "../LoggerService/FileLogger";
import {ILogger} from "../LoggerService/ILogger";
import {LoggerLevels} from "../LoggerService/LoggerLevels";

export default class MongoProductService implements IProductService {
    logger: ILogger;

    constructor() {
        this.logger = new FileLogger('product-service.txt')
    }

    async getAllProducts(): Promise<Product[]> {
        return ProductModel.find().populate("producent category")
    }

    async getAllProductsForCategory(category: Category): Promise<Product[]> {
        const categoryId = category._id;
        return ProductModel.find({category: categoryId}).populate("producent category")
    }

    getAllProductsForProducer(producer: Producer): Promise<Product[]> {
        const producerId = producer._id;
        // @ts-ignore
        // TODO: typescript cache error clear and remove ts-ignore
        return ProductModel.find({producent: producerId}).populate("producent category")
    }

    async getById(id: string): Promise<Product> {
        await this.logger.log(LoggerLevels.Debug, `getById(${id})`, new Date())
        return ProductModel.findById(id).populate("producent category")
    }

    async getByArrayOfIds(ids: string[]): Promise<Product[]> {
        return ProductModel.find({_id: {$in: ids}}).populate("producent category")
    }

}