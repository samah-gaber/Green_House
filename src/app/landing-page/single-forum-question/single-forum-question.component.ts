import { PlantationQuestionServiceService } from './../../services/plantation-question-service.service';
import { Component, OnInit,Input } from '@angular/core';
import { UserDataOrderModalComponent } from 'src/app/cart/user-data-order-modal/user-data-order-modal.component';

@Component({
  selector: 'app-single-forum-question',
  templateUrl: './single-forum-question.component.html',
  styleUrls: ['./single-forum-question.component.scss']
})
export class SingleForumQuestionComponent implements OnInit {
  @Input() question;
  @Input() userRole;
  replyCount: number;
  constructor(private plantationQuestionService: PlantationQuestionServiceService) { }

  ngOnInit() {
    this.replyCount = this.question.answers.length;
    console.log('single forum ques', this.userRole);
  }

  submitComment(){
    const commentSubmitted = (<HTMLInputElement>document.getElementById("plantationQuestion"+this.question.questionId)).value;
    this.plantationQuestionService.submitAnswerForPlantationQuestion(this.question.questionId,commentSubmitted).subscribe(
      res => {
        console.log('answer submitted');
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
