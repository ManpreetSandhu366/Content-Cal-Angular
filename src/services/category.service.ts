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
  categories: Array<ICategory>;

  constructor(private http: HttpClient) {
    this.categories = [
      {
        id: 2,
        name: 'Clothing'
      },
      {
        id: 1,
        name: 'Electronics'
      },
      {
        id: 3,
        name: 'Kitchen'
      }
    ];
  }

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.api}/category`).pipe(
      tap(console.log)
    );
  }

  getAllLocally(): Array<ICategory> {
    return this.categories;
  }
}
