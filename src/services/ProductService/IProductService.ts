import {Product} from "../../common/models/product";
import {Category} from "../../common/models/category";
import {Producer} from "../../common/models/producer";
import {ILogger} from "../LoggerService/ILogger";

/* WZORZEC MOST */
/*
* Każdy z wariantów IProductService może skorzystać z dowolnego wariantu ILogger
*/
export interface IProductService {

    logger: ILogger;

    getAllProducts(): Promise<Product[]>;

    getAllProductsForCategory(category: Category): Promise<Product[]>;

    getAllProductsForProducer(producer: Producer): Promise<Product[]>;

    getById(id: string): Promise<Product>;

    getByArrayOfIds(ids: string[]): Promise<Product[]>;
}