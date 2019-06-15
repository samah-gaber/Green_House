import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  localstorageTokenKeyName = 'id_token';
  requestTokenKey = 'token';
  constructor(private http : HttpClient) { }


  // this method represents a single exit point to backend, all services eventually will
  // call this method to send out a post request
  sendRequest(inputUrl, inputBody){
    console.log("http service , sending request to ", inputUrl);
    const myheader = new HttpHeaders();
    let body = new HttpParams();
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    // this line sets a key,value pair in the header section of the request for the token, where
    // the key is (token) and we extract the token from localStorage
    myheader.set(this.requestTokenKey,localStorage.getItem(this.localstorageTokenKeyName));
    console.log("This is the final stage , body is ", inputBody);
    body = body.set('postData', JSON.stringify(inputBody));
    return this.http.post(inputUrl , body, {headers: myheader});
  }
}
