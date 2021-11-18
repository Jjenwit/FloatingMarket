import { LoginService } from './../login.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { BillingService } from './../billing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {

  name;
  address;
  phone;

  noVAT;
  VAT;
  shippingCost;
  netPrice;

  vouchers;
  voucherCode;
  voucherValue = 0;

  constructor(private billingService: BillingService, private shoppingCartService: ShoppingCartService, private loginService: LoginService) { }

  ionViewWillEnter()  {
    this.name = this.billingService.name;
    this.address = this.billingService.address;
    this.phone = this.billingService.phone;
    
    this.noVAT = this.shoppingCartService.priceDetail['noVAT']
    this.VAT = this.shoppingCartService.priceDetail['VAT']
    this.shippingCost = this.shoppingCartService.priceDetail['shippingCost']
    this.netPrice = this.shoppingCartService.priceDetail['netPrice']

    this.vouchers = this.loginService.loginAccount['vouchers']
  }

  onChange() {
    this.netPrice = this.shoppingCartService.priceDetail['netPrice']
    for(let i = 0; i < this.vouchers.length; i++) {
      if(this.voucherCode == this.vouchers[i]['code']) {
        this.voucherValue = this.vouchers[i]['value'];
      }
    }
    
    this.netPrice -= this.voucherValue
    if(this.netPrice < 0) {
      this.netPrice = 0;
    }
  }
}
