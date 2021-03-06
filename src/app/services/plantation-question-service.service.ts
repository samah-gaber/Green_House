import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlantationQuestionServiceService {

  constructor(private http: HttpClient, private httpService: HttpServiceService) { }

  getQuestions(){
    //let url = `plantations/question`;
      return this.httpService.getRequest('./assets/genericQuestionObject.json');
    // return this.http.get('http://192.168.43.132:9999/api/client/Getquestions/112');
    //return this.httpService.getRequest(url);
  }

  submitAnswerForPlantationQuestion(questionId, answer){
    const body = {
      answer: answer,
      question_id: +questionId
    }
    const url = "plantations/editanswer";
    return this.httpService.postRequest(url,body);
  }
}
