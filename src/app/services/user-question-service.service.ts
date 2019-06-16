import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DomainService } from './domain.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionServiceService {
  questionData: any;
  // domainURL = this.domainService.getDomain();
  // headers;
  // userToken;
  // userQuestionsURL = 'http://192.168.43.132:9999/api/client/Getquestions/112';

  constructor(
    private http: HttpClient, 
    private httpService: HttpServiceService,
    private userService: UserService,
    private domainService: DomainService
  ) {

    // if(this.userService.returnAuthUserData()) {
    //   this.userToken = this.userService.returnAuthUserData().token;
    // }
  }

  getQuestions() {
    let url = 'client/Getquestions';
    // let url = this.userQuestionsURL + userId;
    // return this.http.get(url);
    // let url = './assets/genericQuestionObject.json';
    // return this.http.get(`${this.domainURL}client/Getquestions`, {
    //   'headers': this.headers
    // });
    return this.httpService.getRequest(url);

  }

  getUserQuestionCategories() {
    let url = 'plants/allcategories';
    // return this.http.get('./assets/userQuestionCategories.json');
    // return this.http.get(`${this.domainURL}plants/allcategories`, {
    //   'headers': this.headers
    // });
    return this.httpService.getRequest(url);    
  }

  getUserQuestionPlantByCategoryId(catId) {
    console.log('getting plants ');
    let url = `plants/category/${catId}`;
    // return this.http.get('./assets/userQuestionPlants.json');
    // return this.http.get(`${this.domainURL}/plants/category/cat1`, {
    //   'headers': this.headers
    // });
    return this.httpService.getRequest(url);
  }

  sendFormData(data){
    let url = `client/insertQuestion`;  
    // const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    // return this.httpService.postRequest(url, data);
    return this.httpService.postRequest(url, data);
  }
}
