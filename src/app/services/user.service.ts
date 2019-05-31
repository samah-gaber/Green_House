import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignedUp, UserSignedIn, AuthUserData } from '../interfaces/user-interface';

@Injectable()

export class UserService {

    authToken: string;
    // userName: string;
    // userId: number;
    authUser: AuthUserData;

  constructor( private http: HttpClient ) { }

  urlSignUp = 'https://reqres.in/api/register';
  urlSignIn = 'https://reqres.in/api/login';

    submitNewUser(userSignedUp: UserSignedUp) {
      this.http.post( this.urlSignUp, userSignedUp ).subscribe (
          (res: AuthUserData) => {
              console.log(res);
            //   this.setAuthToken(res.token);   
            this.authUser = res;         
              this.setAuthToken(this.authUser.token);   
            },
            error => console.log(error)
        );
    }
    logInUser(userSignedIn: UserSignedIn ) {
        this.http.post( this.urlSignUp, userSignedIn ).subscribe (
            (res: AuthUserData) => {
                console.log(res);
                //   this.setAuthToken(res.token);
                this.authUser = res;         
                    this.setAuthToken(this.authUser.token);   
            },
            (error) => console.log(error)
        );
    }

    setAuthToken(token) {
        this.authToken = token;
        localStorage.setItem('UserToken', this.authToken);
    }
    
    deleteAuthToken(token) {
        this.authToken = '';
        localStorage.removeItem('UserToken');
    }

    returnAuthToken() {
        this.authToken = localStorage.getItem('UserToken');
        return this.authToken;
    }

    returnAuthUserData(): AuthUserData {
        return this.authUser;
    }
}
