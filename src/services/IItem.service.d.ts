import { Observable } from 'rxjs';
import { IItem } from '../models/item';

export interface IItemService {
    getAll(): Observable<IItem[]>
    add(item: IItem): Observable<IItem>;
    delete(id: number): Observable<boolean>;
}