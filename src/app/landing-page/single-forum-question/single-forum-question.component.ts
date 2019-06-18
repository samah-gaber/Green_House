import { PlantationQuestionServiceService } from './../../services/plantation-question-service.service';
import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';
import { UserDataOrderModalComponent } from 'src/app/cart/user-data-order-modal/user-data-order-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-single-forum-question',
  templateUrl: './single-forum-question.component.html',
  styleUrls: ['./single-forum-question.component.scss']
})
export class SingleForumQuestionComponent implements OnInit {
  @Input() question;
  @Input() userRole;
  @Input() userName;
  @Output() triggerForumPageQuestionRefresh = new EventEmitter();
  replyCount: number;
  plantCommentForm: FormGroup;
  plantNewComment : FormControl;
  answerTextBeingEdited : any;
  Counter = 0;
  constructor(private plantationQuestionService: PlantationQuestionServiceService,
              private ngbModalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.replyCount = this.question.answers.length;
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.plantNewComment = new FormControl('');
  }

  createForm() {
    this.plantCommentForm = this.fb.group({
      plantComment: this.plantNewComment,
    });
  }

  submitComment(){
    const commentSubmitted = (<HTMLInputElement>document.getElementById("plantationQuestion"+this.question.questionId)).value;
    this.plantationQuestionService.submitAnswerForPlantationQuestion(this.question.questionId,commentSubmitted).subscribe(
      res => {
        console.log('answer submitted');
        console.log(res);
        this.triggerForumPageQuestionRefresh.emit(true);
      },
      error => {
        console.log(error);
      }
    )
  }

  editOwnPlantationComment(content,answer,question){
    this.ngbModalService.open(content, {backdropClass: 'light-blue-backdrop'});
    this.answerTextBeingEdited = answer.answer;
    console.log("the previous comment was", answer.answer);
    console.log("The element is ", document.getElementById("editCommentTextArea"));
    (<HTMLInputElement>document.getElementById("editCommentTextArea")).value="dddddddd";
    console.log("Answer", answer);
    console.log("Question", question);
  }

  submitEditedComment(){
    const commentSubmitted = (<HTMLInputElement>document.getElementById("editCommentTextArea")).value;
    this.plantationQuestionService.submitAnswerForPlantationQuestion(this.question.questionId,commentSubmitted).subscribe(
      res => {
        console.log('answer submitted');
        console.log(res);
        this.triggerForumPageQuestionRefresh.emit(true);
      },
      error => {

        console.log(error);
      }
    )
  }

}
