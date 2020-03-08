import { IItem } from 'src/models/item';
import { IContent } from 'src/models/content';
import { ICategory } from 'src/models/category';
import { IToastr } from 'src/services/IToastr.service';
import { ItemService } from 'src/services/item.service';
import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN } from 'src/services/toastr.service';
import { CategoryService } from 'src/services/category.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    item: IItem;
    items: IItem[];
    itemName: string;
    itemValue: number;
    contents: IContent[];
    itemCategory: number;
    categories: ICategory[];

    constructor(private categoryService: CategoryService,
                private itemService: ItemService,
                @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

    ngOnInit(): void {
        this.categoryService.getAll().subscribe(categories => {
            this.categories = categories;
            this.getItems();
        });
    }

    removeItem(id: number): void {
        this.itemService.delete(id).subscribe(_ => {
            this.toastr.error('Item has been removed successfully.');
            this.getItems();
        });
    }

    addItem(): void {
        this.item = {
            id: null,
            value: this.itemValue,
            displayName: this.itemName,
            categoryId: this.itemCategory * 1
        };

        this.itemService.add(this.item).subscribe(_ => {
            this.toastr.success('Item is successfully added.');
            this.getItems();
            this.resetForm();
        });
    }

    getItems(): void {
        this.contents = [];
        this.itemService.getAll().subscribe(items => {
            this.categories.forEach(category => {
                let filteredItems: IItem[];
                filteredItems = items.filter(item => item.categoryId === category.id);
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
        });
    }

    resetForm(): void {
        this.itemName = null;
        this.itemValue = null;
        this.itemCategory = null;
    }
}
