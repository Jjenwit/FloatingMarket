import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  cartIcon = 'cart-outline';
  storeIcon = 'storefront-outline';
  accountIcon = 'person-circle-outline';

  constructor() { }
}
