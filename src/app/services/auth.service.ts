import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  loggedIn = false;

  constructor() { }

  isAuthenticated() {
    if (localStorage.getItem('UserToken')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    return this.loggedIn;
  }
}
