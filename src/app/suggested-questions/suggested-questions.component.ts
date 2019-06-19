import { UserQuestionServiceService } from './../services/user-question-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suggested-questions',
  templateUrl: './suggested-questions.component.html',
  styleUrls: ['./suggested-questions.component.scss']
})
export class SuggestedQuestionsComponent implements OnInit {

  retrievedPreviousRelatedQuestions;
  @ViewChild('questionSentSuccess') private questionSentSuccessModal;

  constructor(
    private userQuestService: UserQuestionServiceService,
    private userQuestionService: UserQuestionServiceService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  this.retrievedPreviousRelatedQuestions = this.userQuestService.sendQuestRes();
  console.log('new component',this.retrievedPreviousRelatedQuestions);
  }

  imokDontSend(){
    const body={
      flag:true,
      questionID:this.retrievedPreviousRelatedQuestions.currentQuestionId
    }
    // this.userQuestionService.resendQuestion(body).subscribe((response) =>{
      this.modalService.open(this.questionSentSuccessModal, { backdropClass: "light-blue-backdrop" });
    // });
  }

  resendComment() {
    const body={
      flag:false,
      questionID:this.retrievedPreviousRelatedQuestions.currentQuestionId
    };

    // this.userQuestionService.resendQuestion(body).subscribe((response) =>{
      this.modalService.open(this.questionSentSuccessModal, { backdropClass: "light-blue-backdrop" });
    // });
  }

}
