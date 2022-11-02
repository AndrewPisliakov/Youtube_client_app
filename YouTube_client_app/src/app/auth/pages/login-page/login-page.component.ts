import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public valueFromInputLogin = '';
  public valueFromInputPassword = '';
  private _loginServise;

  formSubmit: boolean;
  subscription: Subscription;

  constructor(loginService: LoginService) {
    this._loginServise = loginService;
  }

  onSubmit(form: NgForm) {
    if(this.valueFromInputLogin === '' || this.valueFromInputPassword === '') return;
    this._loginServise.setIsLogin(true);
    this._loginServise.saveUserData();
    this.valueFromInputLogin = '';
    this.valueFromInputPassword = '';

    //===============================================
   
    this._loginServise.formSubmitSubject.next(true);
  }

  listenerInputLogin(e: HTMLInputElement) {
    this._loginServise.setLoginName(this.valueFromInputLogin);
  }

  listernerInputPassword(e: HTMLInputElement) {
    this._loginServise.setPassword(this.valueFromInputPassword);
  }

  ngOnInit(): void {
  }
}
