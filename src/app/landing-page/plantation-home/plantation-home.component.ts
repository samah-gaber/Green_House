import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-plantation-home',
  templateUrl: './plantation-home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./plantation-home.component.scss']
})
export class PlantationHomeComponent implements OnInit {

  questionForm: FormGroup;
  plantationNewQuestion : FormControl;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  createFormControls() {
    this.plantationNewQuestion= new FormControl('');
  }

  createForm() {
    this.questionForm = this.fb.group({
      plantationQuestion: this.plantationNewQuestion,
    });
  }

  handleSend(param){

    this.modalService.dismissAll();
  }

}
