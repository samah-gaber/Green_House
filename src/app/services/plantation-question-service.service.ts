import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlantationQuestionServiceService {

  constructor(private http: HttpClient, private httpService: HttpServiceService) { }

  getQuestions(){
     return this.http.get('./assets/genericQuestionObject.json');
    //return this.http.get('http://192.168.43.132:9999/api/client/Getquestions/112');
  }

  submitAnswerForPlantationQuestion(questionId, answer){
    const body = {
      questionId : questionId,
      answerText : answer
    }
    const url = "";
    return this.httpService.sendRequest(url,body);
  }
}
