import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  
  loggedIn = false;

  constructor( private userService: UserService ) { }

  isAuthenticated() {
    if ( this.userService.returnAuthToken() ) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    return this.loggedIn;
  }
}
