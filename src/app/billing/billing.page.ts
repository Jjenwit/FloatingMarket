import { BillingService } from './../billing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  name;
  address;
  phone;

  constructor(private billingService: BillingService) { }

  ngOnInit() {
  }

  onNext() {
    this.billingService.name = this.name;
    this.billingService.address = this.address;
    this.billingService.phone = this.phone;
  }

}
