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
  suggestedQuestions;

  constructor(
    private http: HttpClient,
    private httpService: HttpServiceService,
    private userService: UserService,
    private domainService: DomainService
  ) { }

  getQuestions() {
    // let url = 'client/Getquestions';
    let url = './assets/genericQuestionObject.json';
    return this.httpService.getRequest(url);

  }

  getUserQuestionCategories() {
    // let url = 'plants/allcategories';
    let url = './assets/userQuestionCategories.json';
    return this.httpService.getRequest(url);
  }

  getUserQuestionPlantByCategoryId(catId) {
    // console.log('getting plants ');
    // let url = `plants/category/${catId}`;
    let url = './assets/userQuestionPlants.json';

    return this.httpService.getRequest(url);
  }

  //this is the first function that will send the first request
  sendFormData(data){
    // let url = `client/insertQuestion`;
    let url =  './assets/firstResponseToSubmittingAQuestion.json';
    return this.httpService.getRequest(url)//this is just a mock
    // return this.httpService.postRequest(url, data);
  }

  getQuestRes(questRes) {
    console.log('usesr service get quest',questRes);
    this.suggestedQuestions = questRes;
  }

  sendQuestRes() {
    console.log('usesr service send quest',this.suggestedQuestions);
    return this.suggestedQuestions;
  }


  //this is the second request to send the question
  resendQuestion(data){
    // let url ='./assets/firstResponseToSubmittingAQuestion.json';
    let url ="client/notusedques"
    return this.httpService.postRequest(url, data);
  }
}
