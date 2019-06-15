import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignedUp, UserSignedIn, AuthUserData } from '../interfaces/user-interface';
import { DomainService } from './domain.service';
import { HttpServiceService } from './http-service.service';

@Injectable()

export class UserService {

  authUserStored: string;
  // userName: string;
  // userId: number;
  authUser: AuthUserData;

  constructor( 
        private http: HttpClient,
        private domain: DomainService,
        private httpService: HttpServiceService
    ) { }


  // urlDomain = this.domain.getDomain();
  urlSignUp = `auth/insertclient`;
  urlSignIn = `auth/login`;
  urlLogOut = `login`;

    submitNewUser(userSignedUp: UserSignedUp) {
      // return this.http.post( this.urlSignUp, userSignedUp );
      return this.httpService.postRequest(this.urlSignUp, userSignedUp);
    }
    
    logInUser(userSignedIn: UserSignedIn ) {
      //  return this.http.post( this.urlSignIn, userSignedIn );
      return this.httpService.postRequest(this.urlSignIn, userSignedIn);
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
