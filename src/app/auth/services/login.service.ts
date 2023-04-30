import { Injectable } from '@angular/core';
import { from, fromEvent, Observable, Observer, Subject, BehaviorSubject } from 'rxjs';

interface ILogin {
  loginName: string;
  password: string,
  isLogin: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  login: ILogin = {
    loginName: '',
    password: '',
    isLogin: false
  }

  private formSubmitSubject = new BehaviorSubject (false);
 
  constructor() { }

  setLoginName(value: string) { this.login.loginName = value; };
  setPassword(value: string) { this.login.password = value; }
  setIsLogin(value: boolean) { this.login.isLogin = value };
  getIsLogin() {return this.login.isLogin}

  saveUserData() {
    localStorage.setItem('user', JSON.stringify(this.login));
  };

  getUserData() {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }

}
