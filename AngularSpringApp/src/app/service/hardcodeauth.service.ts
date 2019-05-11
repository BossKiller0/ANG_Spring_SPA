import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeauthService {

  constructor() { }

  auth(username, password) {
    console.log( 'before' +this.isLogin())
    if (username === 'bhaskar' && password === '123') {
      sessionStorage.setItem('authuser',username);
      console.log( 'after' +this.isLogin())
      return true;
    } else {
      return false;
    }
  }
  isLogin(): boolean{
    return !(sessionStorage.getItem('authuser')==null);
  }
  logout(){
    sessionStorage.removeItem('authuser');
  }
}
