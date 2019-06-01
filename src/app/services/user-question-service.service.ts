import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionServiceService {
  questionData : any;
  constructor() {
    this.questionData = [
      {
        questId : 1,
        questText : "كيف تزرع الحشيش ",
        questTime: Date.now(),
        plantCategory: "مخدرات ",
        plantName:"حشيش ",
        answers : [
          {
            answerId : 1,
            answeredById : 1, //is this id or username
            answeredByPlantationName: "مملكة الحشيش ",
            answerText:"توضع بذور الحشيش بعناية في التربة ثم تسقى بماء بارد فقط ",
            answerTime:Date.now()
          },

        ]
      },
      {
        questId : 1,
        questText : "كيف تزرع المشروم ",
        questTime: Date.now(),
        plantCategory: "فطريات",
        plantName:"مشروم ",
        answers : [
          {
            answerId : 1,
            answeredById : 1, //is this id or username
            answeredByPlantationName: "بلكونة" ,
            answerText:"توضع بذور الحشيش بعناية في التربة ثم تسقى بماء بارد فقط ",
            answerTime:Date.now()
          },
          {
            answerId : 2,
            answeredById : 3, //is this id or username
            answeredByPlantationName: "بلكونة" ,
            answerText:"أي حاجة ",
            answerTime:Date.now()
          },

        ]
      }
    ]
  }
}
