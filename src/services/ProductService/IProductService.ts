import {Product} from "../../common/models/product";
import {Category} from "../../common/models/category";

export interface IProductService{
    getAllProducts(): Promise<Array<Product>>;
    getAllProductsForCategory(category: Category): Promise<Array<Product>>;
    getById(id: string): Promise<Product>;
}