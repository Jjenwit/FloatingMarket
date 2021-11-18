import { LoginService } from './../login.service';
import { ShoppingCartService } from './../shopping-cart.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  route;
  itemsInCart = [];
  totalPrice;

  constructor(private shoppingCartService: ShoppingCartService, private loginService: LoginService) {}

  ngOnInit() {
    this.itemsInCart = this.shoppingCartService.itemsInCart;
    this.totalPrice = this.shoppingCartService.totalPrice;
  }

  ionViewWillEnter() {
    this.route = (this.loginService.hasLogIn) ? "/billing" : "/login";
  }
  
  onCheckOut() {
    this.shoppingCartService.getNetPrice();
  }

  removeItems() {
    for(let i = 0; i < this.shoppingCartService.itemsInCart.length; i++) {
      this.shoppingCartService.itemsInCart[i]['numInCart'] = 0;
    }

    this.shoppingCartService.itemsInCart = [];
    this.itemsInCart = this.shoppingCartService.itemsInCart;
    this.shoppingCartService.totalPrice['totalPrice'] = 0;
  }

}
