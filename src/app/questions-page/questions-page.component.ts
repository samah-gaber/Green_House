import { PlantationQuestionServiceService } from "./../services/plantation-question-service.service";
import { UserService } from "./../services/user.service";
import { TimeServiceService } from "./../services/time-service.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { UserQuestionServiceService } from "../services/user-question-service.service";
import { Component, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { AuthUserData } from "../interfaces/user-interface";

@Component({
  selector: "app-questions-page",
  templateUrl: "./questions-page.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./questions-page.component.scss"]
})
export class QuestionsPageComponent implements OnInit {
  userId: number;
  userRole;
  objData: any;
  questionCategoryOptions: Array<any>;
  questionPlantOptions: Array<any>;
  questionForm: FormGroup;
  userNewQuestion: FormControl;
  selectCategory: FormControl;
  selectPlant: FormControl;
  selectedCategory: string;
  selectedPlant: string;
  questionService;
  retrievedPreviousRelatedQuestions: any;
  generateQuestionIdAfterSubmitting: any;
  successAlert:boolean;

  @ViewChild('checkIfQuestionsExist') private checkIfQuestionExistsModal;
  @ViewChild('questionSentSuccess') private questionSentSuccessModal;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userQuestionService: UserQuestionServiceService,
    private timeService: TimeServiceService,
    private userService: UserService,
    private plantataionQuestionService: PlantationQuestionServiceService,

  ) {
    this.userRole = userService.returnAuthUserData().role;
    if (this.userRole == 1) {
      this.questionService = this.userQuestionService;
      userQuestionService
        .getUserQuestionCategories()
        .subscribe((questionCategories: any) => {
          this.questionCategoryOptions = questionCategories.category;
        });
      console.log('this.questionCategoryOptions', this.questionCategoryOptions);
        
    } else {
      this.questionService = this.plantataionQuestionService;
    }
    this.userId = null;
    this.selectedCategory = null;
    this.questionService.getQuestions(this.userId)
    // this.userService.getQuestions(this.userId)
      .subscribe((questionData: any) => {
        console.log('questions page component', questionData);
        this.objData = questionData.questions;
      });
  }

  ngOnInit() {
    //how are we calling user categories even if role is 2???
    this.userQuestionService
      .getUserQuestionCategories()
      .subscribe((questionCategories: any) => {
        this.questionCategoryOptions = questionCategories.category;
      });
    this.createFormControls();
    this.createForm();
    const self = this;
    this.route.queryParams.subscribe(params => {
      self.userId = params.userId;
      console.log(self.userId);
    });
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: "light-blue-backdrop" });
  }

  handleSend(param) {
    let questionObject = {
      plant_id: this.selectedPlant,
      question_Contain: param.controls.userQuestion.value,
      date: this.timeService.generateTimeStamp()
    };
    console.log("Sending form");
    this.userQuestionService
      .sendFormData(questionObject)
      .subscribe((response: any) => {
        console.log("This is the response for sending form data" + response);
        this.retrievedPreviousRelatedQuestions = response.questions;
        this.generateQuestionIdAfterSubmitting = response.currentQuestionId;
        this.successAlert = true;
        this.modalService.dismissAll();
        if(response.questions.length > 0){
          this.modalService.open(this.checkIfQuestionExistsModal, { backdropClass: "light-blue-backdrop" });
        }
        else{
          this.modalService.open(this.questionSentSuccessModal, { backdropClass: "light-blue-backdrop" });
        }
      });
  }

  createFormControls() {
    this.userNewQuestion = new FormControl("");
    this.selectCategory = new FormControl("");
    this.selectPlant = new FormControl("");
  }

  createForm() {
    this.questionForm = this.fb.group({
      userQuestion: this.userNewQuestion,
      selectCategory: this.selectCategory,
      selectPlant: this.selectPlant
    });
  }

  categorySelected() {
    console.log("Category was selected" + this.selectCategory.value);
    this.selectedCategory = this.selectCategory.value;
    this.userQuestionService
      .getUserQuestionPlantByCategoryId(this.selectedCategory)
      .subscribe((questionPlants: any) => {
        this.questionPlantOptions = questionPlants.plant;
        console.log(
          "Fetched the plants, nw they are ",
          this.questionPlantOptions
        );
      });
  }

  plantSelected() {
    console.log("Plant was selected" + this.selectPlant.value);
    this.selectedPlant = this.selectPlant.value;
  }

  imokDontSend(){
    const body={
      flag:true,
      questionID:this.generateQuestionIdAfterSubmitting
    }
    this.modalService.dismissAll();
    this.userQuestionService.resendQuestion(body).subscribe((response) =>{
      this.modalService.open(this.questionSentSuccessModal, { backdropClass: "light-blue-backdrop" });
    });
  }

  resendComment() {
    const body={
      flag:false,
      questionID:this.generateQuestionIdAfterSubmitting
    };
    this.modalService.dismissAll();

    this.userQuestionService.resendQuestion(body).subscribe((response) =>{
      this.modalService.open(this.questionSentSuccessModal, { backdropClass: "light-blue-backdrop" });
    });
  }

  refreshQuestionPageTrigger(){
    console.log("Refresh question page trigger");
    this.userQuestionService.getQuestions().subscribe((questionData: any) => {
      this.objData = questionData.questions;
    });
  }
}
