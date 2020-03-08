import { Observable } from "rxjs";
import { ICategory } from "src/models/category";

export interface ICategoryService {
    getAll(): Observable<ICategory[]>;
}