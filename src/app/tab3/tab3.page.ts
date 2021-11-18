import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 
  account;

  image;
  username;
  firstname;
  surname;
  phone;
  vouchers;

  constructor(private logInService: LoginService, private router: Router) {}

  ionViewWillEnter() {
    if(!this.logInService.hasLogIn) {
      this.router.navigate(['/login']);
    }

    this.account = this.logInService.loginAccount;
    if(this.account != null) {
      this.image = this.account['image'];
      this.username = this.account['username'];
      this.firstname = this.account['firstname'];
      this.surname = this.account['surname'];
      this.phone = this.account['phone'];
      this.vouchers = this.account['vouchers'];
    }
  }

  signOut() {
    this.logInService.hasLogIn=false;
    this.logInService.hasAccount=false;
    this.logInService.loginAccount=null;
    this.account = null;
    this.image = null;
    this.username = null;
    this.firstname = null;
    this.surname = null;
    this.phone = null;
    this.vouchers = null;
  }

}
