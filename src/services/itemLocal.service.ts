import { IItem } from 'src/models/item';
import { Injectable } from '@angular/core';
import { ICategory } from 'src/models/category';
import { IItemLocalService } from './IItemLocal.service';

@Injectable({
  providedIn: 'root'
})
export class ItemLocalService implements IItemLocalService {
  items: Array<IItem>;
  maxId: number;

  constructor() {
    this.items = [
      {
        id: 6004,
        displayName: 'Jacket',
        value: 34,
        categoryId: 2
      },
      {
        id: 6005,
        displayName: 'Jeans',
        value: 14,
        categoryId: 2
      },
      {
        id: 6006,
        displayName: 'TV',
        value: 2000,
        categoryId: 1
      }
    ];

    this.maxId = 6006;
  }

  add(item: IItem): IItem {
    this.maxId += 1;
    item.id = this.maxId;
    this.items.push(item);
    return item;
  }

  getAll(): Array<IItem> {
    return this.items;
  }

  delete(id: number): boolean {
    this.maxId -= 1;
    this.items = this.items.filter(i => i.id !== id);
    return true;
  }
}
