import {Category} from "../../common/models/category";

export interface ICategoryService{
     getAllCategories(): Promise<Category[]>;
     getById(id: string): Promise<Category>;
}
