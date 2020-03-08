import { IItem } from "./item";

export interface IContent {
    total: number;
    items: IItem[];
    categoryName: string;
}
