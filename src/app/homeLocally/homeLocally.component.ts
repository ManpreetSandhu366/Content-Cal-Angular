import { IItem } from 'src/models/item';
import { IContent } from 'src/models/content';
import { ICategory } from 'src/models/category';
import { IToastr } from 'src/services/IToastr.service';
import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN } from 'src/services/toastr.service';
import { CategoryService } from 'src/services/category.service';
import { ItemLocalService } from 'src/services/itemLocal.service';

@Component({
  selector: 'app-home',
  templateUrl: './homeLocally.component.html'
})
export class HomeLocallyComponent implements OnInit {
  item: IItem;
  items: IItem[];
  itemName: string;
  itemValue: number;
  contents: IContent[];
  itemCategory: number;
  categories: ICategory[];

  constructor(private categoryService: CategoryService,
              private itemService: ItemLocalService,
              @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllLocally();
    this.getItems();
  }

  removeItem(id: number): void {
    this.itemService.delete(id);
    this.toastr.error('Item has been removed successfully.');
    this.getItems();
  }

  addItem(): void {
    this.item = {
      id: null,
      value: this.itemValue,
      displayName: this.itemName,
      categoryId: this.itemCategory * 1
    };

    this.itemService.add(this.item);
    this.toastr.success('Item is successfully added.');
    this.getItems();
    this.resetForm();
  }

  getItems(): void {
    this.contents = [];
    this.items = this.itemService.getAll();
    this.categories.forEach(category => {
      let filteredItems: IItem[];
      filteredItems = this.items.filter(item => item.categoryId === category.id);
      if (filteredItems.length !== 0) {
        this.contents = this.contents.concat({
          categoryName: category.name,
          total: filteredItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value;
          }, 0),
          items: filteredItems
        });
      }
    });
  }

  resetForm(): void {
    this.itemName = null;
    this.itemValue = null;
    this.itemCategory = null;
  }
}
