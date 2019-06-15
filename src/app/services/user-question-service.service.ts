import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DomainService } from './domain.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionServiceService {
  questionData: any;
  domainURL = this.domainService.getDomain();
  headers;
  userToken;
  // userQuestionsURL = 'http://192.168.43.132:9999/api/client/Getquestions/112';

  constructor(
    private http: HttpClient,
    private domainService: DomainService,
    private userService: UserService
  ) {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`,
      'Content-Type': 'application/json'
    });

    if(this.userService.returnAuthUserData()) {
      this.userToken = this.userService.returnAuthUserData().token;
    }
  }

  getUserQuestions() {
    // let url = this.userQuestionsURL + userId;
    // return this.http.get(url);
    // return this.http.get('./assets/genericQuestionObject.json');
    return this.http.get(`${this.domainURL}/client/Getquestions`, {
      'headers': this.headers
    });

  }

  getUserQuestionCategories() {
    // return this.http.get('./assets/userQuestionCategories.json');
    return this.http.get(`${this.domainURL}/plants/allcategories`, {
      'headers': this.headers
    });
  }

  getUserQuestionPlantByCategoryId(catId) {
    console.log('getting plants ');
    // return this.http.get('./assets/userQuestionPlants.json');
    return this.http.get(`${this.domainURL}/plants/category/cat1`, {
      'headers': this.headers
    });

  }

  sendFormData(data){
    const myheader = new HttpHeaders();
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    // const url = '';
    const url = `${this.domainURL}/client/insertQuestion/`;

    let body = new HttpParams();
    body = body.set('formData', data);
    console.log(data);
    // const token = localStorage.getItem('id_token');
    // return this.http.post(url + token, body, {headers: myheader});
    return this.http.post(url , body, {headers: myheader});

  }
}
