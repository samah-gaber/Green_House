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
  urlSignUp = `${this.urlDomain}/Client/insertclient`;
  urlSignIn = `${this.urlDomain}/auth/login`;
  urlLogOut = 'http://reqres.in/api/login';

    submitNewUser(userSignedUp: UserSignedUp) {
      return this.http.post( this.urlSignUp, userSignedUp )
    //   .subscribe (
    //       (res: AuthUserData) => {
    //         console.log(res);
    //         //   this.setAuthToken(res.token);
    //         this.authUser = res;
    //         this.setAuthUserData(this.authUser);
    //         },
    //         error => console.log(error)
    //     );
    }

    logInUser(userSignedIn: UserSignedIn ) {
       return this.http.post( this.urlSignIn, userSignedIn );
    //    .subscribe (
    //         (res: AuthUserData) => {
    //             this.authUser = res;
    //             this.setAuthUserData(this.authUser);
    //         },
    //         (error) => console.log(error)
    //     );
    }

    setAuthUserData(data: AuthUserData) {
        localStorage.setItem( 'authUserData', JSON.stringify(data) );
    }

    deleteAuthUserData(data: AuthUserData) {
        this.http.post( this.urlLogOut, data.token ).subscribe (
            res => {
                console.log(res);
                this.authUser.userId = null;
                this.authUser.userName = '';
                this.authUser.token = '';
                localStorage.removeItem('authUserData');
            },
            error => console.log(error)
        );

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
}
