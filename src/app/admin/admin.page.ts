import { ItemStockService } from './../item-stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  itemName: string;
  category: string;
  price: number;
  imageAddress: string;

  constructor(private itemStockService: ItemStockService) {}


  addItem() {
    this.itemStockService.addItemInDatabase(this.itemName + ',' + this.category + ',' + this.price + ',' + this.imageAddress);
  }
}