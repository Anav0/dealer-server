import {Product} from "../../common/models/product";
import {Category} from "../../common/models/category";

export interface IProductService{
    getAllProducts(): Promise<Product[]>;
    getAllProductsForCategory(category: Category): Promise<Product[]>;
    getById(id: string): Promise<Product>;
}