import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  username;
  password;
  firstname;
  surname;
  phone;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  signUp() {
    this.loginService.signUp(this.username, this.password, this.firstname, this.surname, this.phone);
  }

}
