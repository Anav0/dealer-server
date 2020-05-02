import {Category} from "../../common/models/category";

/* WZORZEC STRATEGY */

/*
* Konkretna implementacja ICategoryService może się dynamicznie zmieniać w zależności od potrzeby.
* W przypadku konieczności zmiany możemy w jednym miejscu tj. w pliku activeServices.ts podmienić konkretną implementację.
*/
export interface ICategoryService{
     getAllCategories(): Promise<Category[]>;
     getById(id: string): Promise<Category>;
}
