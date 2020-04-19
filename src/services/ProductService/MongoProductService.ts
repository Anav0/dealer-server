import {IProductService} from "./IProductService";
import {Category} from "../../common/models/category";
import {Product, ProductModel} from "../../common/models/product";

export default class MongoProductService implements IProductService{
    async getAllProducts(): Promise<Product[]> {
        return ProductModel.find().populate("producent category")
    }

    async getAllProductsForCategory(category: Category): Promise<Product[]> {
        const categoryId = category._id;
        return ProductModel.find({category: categoryId}).populate("producent category")
    }

    async getById(id: string): Promise<Product> {
        return ProductModel.findById(id).populate("producent category")
    }

}