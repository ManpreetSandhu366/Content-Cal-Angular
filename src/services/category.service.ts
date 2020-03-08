import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/Operators';
import { Injectable } from '@angular/core';
import { ICategory } from 'src/models/category';
import { HttpClient } from '@angular/common/http';
import { ICategoryService } from './ICategory.service';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService implements ICategoryService {
    api: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAll(): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(`${this.api}/category`).pipe(
            tap(console.log)
        );
    }
}
