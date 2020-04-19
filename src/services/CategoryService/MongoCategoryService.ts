import {ICategoryService} from "./ICategoryService";
import {Category, CategoryModel} from "../../common/models/category";

export default class MongoCategoryService implements ICategoryService{
    async getAllCategories(): Promise<Category[]> {
        const results = await CategoryModel.find().populate('producers');
        return results as Category[];
    }

    async getById(id: string): Promise<Category> {
        return CategoryModel.findById(id).populate('producers');
    }
}