import { TimeServiceService } from './../services/time-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserQuestionServiceService } from '../services/user-question-service.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  userId: number;
  objData: any;
  questionCategoryOptions: Array<any>;
  questionPlantOptions: Array<any>;
  questionForm: FormGroup;
  userNewQuestion: FormControl;
  selectCategory: FormControl;
  selectPlant: FormControl;
  selectedCategory: string;
  selectedPlant: string;


  constructor(
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private userQuestionService : UserQuestionServiceService,
    private timeService:TimeServiceService
  ) {
    this.userId = null;
    this.selectedCategory = null;
    

    

   }

  ngOnInit() {
    this.userQuestionService.getUserQuestions().subscribe((questionData: any) => {
      this.objData = questionData.questions;
    });
    this.userQuestionService.getUserQuestionCategories().subscribe((questionCategories :any) => {
      this.questionCategoryOptions = questionCategories.category;
    });
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
    let questionObject = {
      plant_id: this.selectedPlant,
      question_Contain : param.controls.userQuestion.value,
      date: this.timeService.generateTimeStamp()
    };
    console.log('Sending form');
    this.userQuestionService.sendFormData(questionObject).subscribe((response) =>{
      console.log("This is the response for sending form data" + response);
    });
    this.modalService.dismissAll();
  }

  createFormControls() {
    this.userNewQuestion = new FormControl('');
    this.selectCategory = new FormControl('');
    this.selectPlant = new FormControl('');
  }

  createForm() {
    this.questionForm = this.fb.group({
      userQuestion: this.userNewQuestion,
      selectCategory: this.selectCategory,
      selectPlant: this.selectPlant,
    });
  }

  categorySelected() {
    console.log('Category was selected' + this.selectCategory.value);
    this.selectedCategory = this.selectCategory.value;
    this.userQuestionService.getUserQuestionPlantByCategoryId(this.selectedCategory).subscribe((questionPlants :any) => {
      this.questionPlantOptions = questionPlants.plant;
      console.log('Fetched the plants, nw they are ', this.questionPlantOptions);
    });
  }

  plantSelected() {
    console.log('Plant was selected' + this.selectPlant.value);
    this.selectedPlant = this.selectPlant.value;
  }
}
