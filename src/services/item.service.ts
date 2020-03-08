import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { IItem } from 'src/models/item';
import { Injectable } from '@angular/core';
import { IItemService } from './IItem.service';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemService implements IItemService {
    apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    add(item: IItem): Observable<IItem> {
        return this.http.post<IItem>(`${this.apiUrl}/item`, item);
    }

    getAll(): Observable<IItem[]> {
        return this.http.get<IItem[]>(`${this.apiUrl}/item`).pipe(
            tap(console.log)
        );
    }

    delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}/item/${id}`);
    }
}
