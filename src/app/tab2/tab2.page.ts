import { ShoppingCartService } from './../shopping-cart.service';
import { ItemStockService } from './../item-stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  itemList = [];
  searchedItemList = [];
  searchInput: string;

  constructor(private itemStockService: ItemStockService, private shoppingCartService: ShoppingCartService) {
  }

  ionViewWillEnter() {
    this.itemList = this.itemStockService.itemList;
    this.searchedItemList = this.itemList;
    
  }

  ngOnInit() {
  }

  searchItems() {
    this.searchedItemList = [];


    if(this.searchInput == null) {
      this.searchedItemList = this.itemList;
      return;
    }


    for(let i = 0; i < this.itemList.length; i++) {
      if((<string>this.itemList[i]["item_name"]).toLowerCase().includes(this.searchInput.toLowerCase())) {
        this.searchedItemList.push(this.itemList[i]);
      }
    }
  }
} 
