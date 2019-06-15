import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionServiceService {
  questionData: any;
  // userQuestionsURL = 'http://192.168.43.132:9999/api/client/Getquestions/112';

  constructor(private http: HttpClient, private httpService: HttpServiceService) {

  }

  getQuestions(userId) {
    // let url = this.userQuestionsURL + userId;
    // return this.http.get(url);
    // return this.http.get('./assets/genericQuestionObject.json');
    return this.http.get('http://192.168.43.132:9999/api/client/Getquestions/112');

  }

  getUserQuestionCategories() {
    // return this.http.get('./assets/userQuestionCategories.json');
    return this.http.get(' http://192.168.43.132:9999/api/plants/allcategories');
  }

  getUserQuestionPlantByCategoryId(catId) {
    console.log('getting plants ');
    // return this.http.get('./assets/userQuestionPlants.json');
    return this.http.get('http://192.168.43.132:9999/api/plants/category/cat1');//neme msh  id

  }

  sendFormData(data){
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.sendRequest(url, data);
  }
}
