import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignedUp, UserSignedIn, AuthUserData } from '../interfaces/user-interface';

@Injectable()

export class UserService {

  authUserStored: string;
  // userName: string;
  // userId: number;
  authUser: AuthUserData;

  constructor(private http: HttpClient) { }

  urlSignUp = 'https://reqres.in/api/register';
  urlSignIn = 'https://reqres.in/api/login';
  urlLogOut = 'https://reqres.in/api/login';

  submitNewUser(userSignedUp: UserSignedUp) {
    this.http.post(this.urlSignUp, userSignedUp).subscribe(
      (res: AuthUserData) => {
        console.log(res);
        //   this.setAuthToken(res.token);
        this.authUser = res;
        this.setAuthUserData(this.authUser);
      },
      error => console.log(error)
    );
  }

  logInUser(userSignedIn: UserSignedIn) {
    this.http.post(this.urlSignUp, userSignedIn).subscribe(
      (res: AuthUserData) => {
        console.log(res);
        //   this.setAuthToken(res.token);
        this.authUser = res;
        this.setAuthUserData(this.authUser);
      },
      (error) => console.log(error)
    );
  }

  setAuthUserData(data: AuthUserData) {
    localStorage.setItem('authUserData', JSON.stringify(data));
  }

  deleteAuthUserData(data: AuthUserData) {
    this.http.post(this.urlLogOut, data.token).subscribe(
      res => {
        console.log(res);
        this.authUser.id = null;
        this.authUser.name = '';
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
