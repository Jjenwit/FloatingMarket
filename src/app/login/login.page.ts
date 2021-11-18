import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username;
  password;
  hasAccount;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.username != null && this.password != null) this.loginService.login(this.username, this.password);
  }

}
