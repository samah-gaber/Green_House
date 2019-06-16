import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { 
  FormControl, 
  FormGroup, 
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm,
  // FormControl
} from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { validateConfig } from "@angular/router/src/config";
import { PlantationServiceService } from 'src/app/services/plantation-service.service';
import { AddPlantCatRes, AddCatPlantsRes } from '../../interfaces/plant-interface';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plantation-home',
  templateUrl: './plantation-home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./plantation-home.component.scss']
})
export class PlantationHomeComponent implements OnInit {

  selectedCategory: string;

  // plantCategories: PlantCatRes;
  plantCategories = {
    category: [
      {
        id: 1,
        name: 'flowers'
      },
      {
        id: 2,
        name: 'flowers'
      },
      {
        id: 3,
        name: 'flowers'
      },
      {
        id: 4,
        name: 'flowers'
      },
      {
        id: 5,
        name: 'flowers'
      }
    ]
  }

  // catPlants: AddCatPlantsRes;
  catPlants = {
    plant: [
      {
        id: 1,
        name: 'rosemary'
      },
      {
        id: 2,
        name: 'rosemary'
      },
      {
        id: 3,
        name: 'rosemary'
      },
      {
        id: 4,
        name: 'rosemary'
      },
      {
        id: 5,
        name: 'rosemary'
      },
    ]
  }

  // old plant form
  addOldPlantForm: FormGroup;
  oldPlantCategory: FormControl;
  oldPlantName: FormControl;



  constructor(
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private plantationService: PlantationServiceService,
    private elem: ElementRef
  ) { }

  ngOnInit() {
    this.createFormControls('old');
    this.createForm('old');
    // this.getPlantsCategories();
    console.log('on init selected cat',this.selectedCategory)
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    document.getElementById('add-new-plant').style.display = 'none';
  }

  createFormControls(formType: string) {
    if(formType === 'old') {
      this.oldPlantCategory= new FormControl('', Validators.required);
      this.oldPlantName= new FormControl('', Validators.required);
    }
  }

  createForm(formType: string) {
    if(formType === 'old') {
      this.addOldPlantForm = this.fb.group({
        oldPlantCategory: this.oldPlantCategory,
        oldPlantName: this.oldPlantName,
      });
    }
  }

  handleSend(param){
    this.modalService.dismissAll();
  }

  showTabForm(event) {
    let tabName = event.target.getAttribute('name');
    let buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(element => {
      element.classList.remove('active');
    });
    event.target.classList.add('active');
    let formsArr = document.querySelectorAll('.add-plant-form');
    formsArr.forEach(element => {
      element.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
  }

  onAddOldPlant(form:FormGroup) {
    console.log(form.value.oldPlantCategory);
    console.log(form.value.oldPlantName);
  }

  // requests methods
  getPlantsCategories() {
    this.plantationService.addPlantFormGetPlantCategories().subscribe(
      (res:AddPlantCatRes) => {
        this.plantCategories = res;
      }
    )
  }

  onSelectCategory() {
    let catName = this.oldPlantCategory.value;
    this.selectedCategory = catName;
    console.log('after selection selected cat',this.selectedCategory);
    (<HTMLInputElement>document.getElementById('newPlantName')).disabled = false;

    // this.plantationService.addPlantFormGetCatPlants(catName).subscribe(
    //   (res: AddCatPlantsRes) => {
    //     this.catPlants = res;
    //   }
    // )
  }

}
