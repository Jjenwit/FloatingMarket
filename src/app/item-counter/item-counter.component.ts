import { ShoppingCartService } from './../shopping-cart.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss'],
})
export class ItemCounterComponent implements OnInit {

  @Input('item') item: any;
  @Input ('initialized') initialized = false;


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    if(!this.initialized) {
      this.item['numInCart'] = 0;
    }
  }

  addItemtoCart() {
    if(this.shoppingCartService.itemsInCart.indexOf(this.item) == -1) {
      this.shoppingCartService.itemsInCart.push(this.item);
    }
    this.shoppingCartService.itemsInCart[this.shoppingCartService.itemsInCart.indexOf(this.item)]['numInCart']++;
    this.shoppingCartService.totalPrice['totalPrice'] += this.item['price'];
  }

  removeItemFromCart() {
    if(this.item['numInCart'] != 0) {
      this.shoppingCartService.itemsInCart[this.shoppingCartService.itemsInCart.indexOf(this.item)]['numInCart']--;
      this.shoppingCartService.totalPrice['totalPrice'] -= this.item['price']; 
    }

    if(this.item['numInCart'] == 0 && this.shoppingCartService.itemsInCart.includes(this.item)) {
      this.shoppingCartService.itemsInCart.splice(this.shoppingCartService.itemsInCart.indexOf(this.item),1);
    }
  }

}
