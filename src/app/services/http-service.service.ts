import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DomainService } from './domain.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  localstorageTokenKeyName = 'authUserData';
  requestTokenKey = 'Authorization';
  domainUrl = this.domainService.getDomain();
  userToken: string;

  constructor(
    private http : HttpClient,
    private domainService: DomainService
  ) { }

  // setting http request header
  setHttpHeader() {
    if( localStorage.getItem(this.localstorageTokenKeyName) ) {
      this.userToken = JSON.parse(localStorage.getItem(this.localstorageTokenKeyName)).token;
      // const myheader = new HttpHeaders();
      // myheader.set('Content-Type', 'application/json');
      // myheader.set(this.requestTokenKey,`Bearer ${this.userToken}`);
      const myheader = new HttpHeaders({
        'Authorization': `Bearer ${this.userToken}`,
        'Content-Type': 'application/json'
      });
      console.log('user token',JSON.parse(localStorage.getItem(this.localstorageTokenKeyName)).token);
      return myheader;
    } else {
      console.log('no token !!!!!!');
      return null;
    }
  }

  // this method represents a single exit point to backend, all services eventually will
  // call this method to send out a post request
  postRequest(inputUrl, inputBody){
    const myheader = this.setHttpHeader();
    console.log("http service , post request to ", inputUrl);
    if( myheader ) {
      console.log("send token with header");
      
      return this.http.post(`${this.domainUrl}${inputUrl}`, inputBody, {headers: myheader});
    } else {
      console.log("NOT send token with header");
      return this.http.post(`${this.domainUrl}${inputUrl}`, inputBody);
    }
    // let body = new HttpParams();
    // myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    // this line sets a key,value pair in the header section of the request for the token, where
    // the key is (token) and we extract the token from localStorage
    // myheader.set(this.requestTokenKey,localStorage.getItem(this.localstorageTokenKeyName));
    // console.log("This is the final stage , body is ", inputBody);
    // body = body.set('postData', JSON.stringify(inputBody));
    // return this.http.post(inputUrl , body, {headers: myheader});
  }

  // sending get rquest
  getRequest(inputUrl){
    debugger;
    console.log("http service , get request to ", inputUrl);
    const myheader = this.setHttpHeader();
    console.log("http service , header ", myheader);
    if(myheader) {
      console.log('sending header with req');
      return this.http.get(`${this.domainUrl}${inputUrl}`, {headers: myheader});
    } else {
      console.log('NOT sending header with req');
      return this.http.get(`${this.domainUrl}${inputUrl}`);
    }
  }
  
}
