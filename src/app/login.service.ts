import { Router } from '@angular/router';
import { ItemStockService } from './item-stock.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAccount;
  hasLogIn;
  hasAccount;

  constructor(private http: HttpClient, private itemStockService: ItemStockService, private router: Router) { }

  login(username, password) {
    this.http.get(this.itemStockService.url + '/login?account=' + username + ',' + password).subscribe( data => {
      this.hasAccount = data['data']['hasAccount'];
      if(this.hasAccount) {
        this.loginAccount = data['data']['account'];
        this.hasLogIn = true;
        this.router.navigateByUrl('/tabs/tab2');
      }
    });
  }

  signUp(username, password, name, surname, phone) {
    this.http.get(this.itemStockService.url + '/signup?account=' + username + ',' + password + ',' + name + ',' + surname + ',' + phone).subscribe( () => {
      this.router.navigate(['/login']);
    });
  }
}
