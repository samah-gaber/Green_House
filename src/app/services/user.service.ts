import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignedUp, UserSignedIn } from '../interfaces/user-interface';

@Injectable()

export class UserService {

    authToken: string;
  constructor( private http: HttpClient ) { }

  urlSignUp = 'https://reqres.in/api/register';
  urlSignIn = 'https://reqres.in/api/login'

  submitNewUser(userSignedUp: UserSignedUp) {
      this.http.post<UserSignedUp>( this.urlSignUp, userSignedUp ).subscribe (
          res => {
              console.log(res);
            //   this.setAuthToken(res.token);            
            },
          error => console.log(error)
      );
  }
  logInUser(userSignedIn: UserSignedIn ) {
      this.http.post( this.urlSignUp, userSignedIn ).subscribe (
          (res) => {
              console.log(res);
            //   this.setAuthToken(res.token);
        },
        (error) => console.log(error)
    );
}

    setAuthToken(token) {
        this.authToken = token;
        localStorage.setItem('UserToken', this.authToken);
    }

    returnAutnToken() {
        this.authToken = localStorage.getItem('UserToken');
        return this.authToken;
    }
    
    deleteAuthToken(token) {
        this.authToken = '';
        localStorage.removeItem('UserToken');
    }
}
