import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { ItemStockService } from './item-stock.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  itemList = [];
  itemsInCart = [];
  totalPrice = {'totalPrice': 0};
  priceDetail;

  constructor(private itemStockService: ItemStockService, private loginService: LoginService, private http: HttpClient) {
    this.itemList = this.itemStockService.itemList;
  }    

  getNetPrice() {
    this.http.get(this.itemStockService.url + '/netprice?totalprice=' + this.totalPrice['totalPrice']).subscribe( data => {
      this.priceDetail = data['data'];
      console.log(this.priceDetail);
    });
  }
  

}
