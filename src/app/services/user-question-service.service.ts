import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionServiceService {
  questionData: any;
  // userQuestionsURL = 'http://192.168.43.132:9999/api/client/Getquestions/112';

  constructor(private http: HttpClient) {

  }

  getUserQuestions(userId) {
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
    const myheader = new HttpHeaders();
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');
    // const url = '';
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';

    let body = new HttpParams();
    body = body.set('formData', data);
    console.log(data);
    // const token = localStorage.getItem('id_token');
    // return this.http.post(url + token, body, {headers: myheader});
    return this.http.post(url , body, {headers: myheader});

  }
}
