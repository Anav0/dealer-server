import {Product} from "../../common/models/product";
import {Category} from "../../common/models/category";
import {Producer} from "../../common/models/producer";

export interface IProductService {
    getAllProducts(): Promise<Product[]>;

    getAllProductsForCategory(category: Category): Promise<Product[]>;

    getAllProductsForProducer(producer: Producer): Promise<Product[]>;

    getById(id: string): Promise<Product>;

    getByArrayOfIds(ids: string[]): Promise<Product[]>;
}