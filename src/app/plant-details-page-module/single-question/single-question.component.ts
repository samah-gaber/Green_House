import { PlantationServiceService } from 'src/app/services/plantation-service.service';
import { PlantationQuestionServiceService } from './../../services/plantation-question-service.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @Input() question;
  @Input() userRole;
  @Output() triggerRefreshQuestionsPage = new EventEmitter();
  replyCount: number;
  constructor(private plantationQuestionService: PlantationQuestionServiceService) { }

  ngOnInit() {
    this.replyCount = this.question.answers.length;
  }

  submitComment(){
    const commentSubmitted = (<HTMLInputElement>document.getElementById("plantationQuestion"+this.question.questionId)).value;
    this.plantationQuestionService.submitAnswerForPlantationQuestion(this.question.questionId,commentSubmitted);
    this.triggerRefreshQuestionsPage.emit(true);
  }

}
