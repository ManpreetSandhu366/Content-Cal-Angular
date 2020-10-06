import { IItem } from '../models/item';

export interface IItemLocalService {
  getAll(): IItem[];
  add(item: IItem): IItem;
  delete(id: number): boolean;
}
