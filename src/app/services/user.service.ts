import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignedUp, UserSignedIn, AuthUserData } from '../interfaces/user-interface';
import { DomainService } from './domain.service';

@Injectable()

export class UserService {

  authUserStored: string;
  // userName: string;
  // userId: number;
  authUser: AuthUserData;

  constructor( 
        private http: HttpClient,
        private domain: DomainService
    ) { }


  urlDomain = this.domain.getDomain();
  urlSignUp = `${this.urlDomain}/auth/insertclient`;
  urlSignIn = `${this.urlDomain}/auth/login`;
  urlLogOut = `${this.urlDomain}/login`;

    submitNewUser(userSignedUp: UserSignedUp) {
      return this.http.post( this.urlSignUp, userSignedUp );
    }

    logInUser(userSignedIn: UserSignedIn ) {
       return this.http.post( this.urlSignIn, userSignedIn );
    }

    setAuthUserData(data: AuthUserData) {
        localStorage.setItem( 'authUserData', JSON.stringify(data) );
    }
    
    logOutUser() {
     let userToken = this.returnAuthUserData().token;
       return this.http.post( this.urlLogOut, userToken );    
    }

  returnAuthUserData() {
    if (!this.authUser) {
      let authUserStored = localStorage.getItem('authUserData');
      if (authUserStored) {
        this.authUser = JSON.parse(authUserStored);
      } else {
        this.authUser = null;
      }
    }
    return this.authUser;
  }

    deleteAuthUserData() {
        this.authUser.userId = null;
        this.authUser.userName = '';
        this.authUser.token = '';
        localStorage.removeItem('authUserData');
    }
}
