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
  domainURL = this.domainService.getDomain();
  headers;
  userToken;
  // userQuestionsURL = 'http://192.168.43.132:9999/api/client/Getquestions/112';

  constructor(private http: HttpClient, private httpService: HttpServiceService) {

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
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.sendRequest(url, data);
  }
}
