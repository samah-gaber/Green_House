import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserQuestionServiceService } from '../services/user-question-service.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  userId : number;
  objData: any;
  questionForm: FormGroup;
  userNewQuestion : FormControl;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private route: ActivatedRoute, private userQuestionService : UserQuestionServiceService) {
    this.userId = null;
    this.objData = userQuestionService.questionData;
   }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    const self = this;
    this.route.queryParams
      .subscribe(params => {
         self.userId = params.userId;
         console.log(self.userId);
      });

  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  handleSend(param){
    console.log("Sending form");
    console.log(param);
    this.modalService.dismissAll();

  }

  createFormControls() {
    this.userNewQuestion= new FormControl('');
  }

  createForm() {
    this.questionForm = this.fb.group({
      userQuestion: this.userNewQuestion,
    });
  }

}
