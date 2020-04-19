import {Category} from "../../common/models/category";

export interface ICategoryService{
     getAllCategories(): Promise<Array<Category>>;
     getById(id: string): Promise<Category>;
}
