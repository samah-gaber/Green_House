import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm
} from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { validateConfig } from "@angular/router/src/config";
<<<<<<< HEAD
import { PlantationServiceService } from 'src/app/services/plantation-service.service';
=======
// import { PlantationServiceService } from 'src/app/services/plantation-service.service';
// import { AddPlantCatRes, AddCatPlantsRes } from '../../interfaces/plant-interface';
>>>>>>> e96e1142dc409599a34c8c70874beca9146bbb61
import { PlantService } from '../../services/plant.service';
import { Router } from '@angular/router';
import { PlantationServiceService } from '../../services/plantation-service.service';

@Component({
  selector: 'app-plantation-home',
  templateUrl: './plantation-home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./plantation-home.component.scss']
})
export class PlantationHomeComponent implements OnInit {

  // selectedCategory: string;

  // plantCategories: PlantCatRes;
  // plantCategories = {
  //   category: [
  //     {
  //       id: 1,
  //       name: 'flowers'
  //     },
  //     {
  //       id: 2,
  //       name: 'flowers'
  //     },
  //     {
  //       id: 3,
  //       name: 'flowers'
  //     },
  //     {
  //       id: 4,
  //       name: 'flowers'
  //     },
  //     {
  //       id: 5,
  //       name: 'flowers'
  //     }
  //   ]
  // }

  // catPlants: AddCatPlantsRes;
  // catPlants = {
  //   plant: [
  //     {
  //       id: 1,
  //       name: 'rosemary'
  //     },
  //     {
  //       id: 2,
  //       name: 'rosemary'
  //     },
  //     {
  //       id: 3,
  //       name: 'rosemary'
  //     },
  //     {
  //       id: 4,
  //       name: 'rosemary'
  //     },
  //     {
  //       id: 5,
  //       name: 'rosemary'
  //     },
  //   ]
  // }

  //plant item contents types
  // orderFormObj = {
  //   plantItems: [
  //     {
  //       type: 'graft',
  //       artype: 'شتلة',
  //       checkCName: 'oldGraftType',
  //       inputCName: 'oldGraftPrice'
  //     },
  //     {
  //       type: 'seeds',
  //       artype: 'بذور',
  //       checkCName: 'oldSeedsType',
  //       inputCName: 'oldSeedsPrice'
  //     },
  //     {
  //       type: 'soil',
  //       artype: 'تربة',
  //       checkCName: 'oldSoilType',
  //       inputCName: 'oldSoilPrice'
  //     },
  //     {
  //       type: 'fert',
  //       artype: 'سماد',
  //       checkCName: 'oldFertType',
  //       inputCName: 'oldFertPrice'
  //     }
  //   ]
  // }

  // old plant form
  // addOldPlantForm: FormGroup;
  // oldPlantCategory: FormControl;
  // oldPlantName: FormControl;
  // oldgraftType: FormControl;
  // oldgraftPrice: FormControl;
  // oldseedsType: FormControl;
  // oldseedsPrice: FormControl;
  // oldsoilType: FormControl;
  // oldsoilPrice: FormControl;
  // oldfertType: FormControl;
  // oldfertPrice: FormControl;

  // showEmptyOrderError = false;




  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private plantationService: PlantationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.createFormControls('old');
    // this.createForm('old');
    // this.getPlantsCategories();

    // this.addOldPlantForm = this.fb.group(
    //   {
    //     oldPlantCategory: ['', Validators.required],
    //     oldPlantName: ['',  Validators.required],
    //     plantType: this.fb.group(
    //       {
    //         oldgraftType: '',
    //         oldgraftPrice: '',
    //         oldseedsType: '',
    //         oldseedsPrice: '',
    //         oldsoilType: '',
    //         oldsoilPrice: '',
    //         oldfertType: '',
    //         oldfertPrice: ''
    //       },
    //       {
    //         validator: (formGroup: FormGroup) => {
    //         return this.validateOrderForm(formGroup);
    //         }
    //       }
    //     )
    //   }
    // )
  }

  // validateOrderForm(formGroup: FormGroup) {
  //   if (
  //     !formGroup.controls["oldgraftType"].value &&
  //     !formGroup.controls["oldseedsType"].value &&
  //     !formGroup.controls["oldsoilType"].value &&
  //     !formGroup.controls["oldfertType"].value
  //   ) {
  //     return { validateOrderForm: true };
  //   } else {
  //     return null;
  //   }
  // }

  goToAddPlantForm() {
    this.router.navigateByUrl('/addplantform');
  }

  // openBackDropCustomClass(content) {
  //   this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  //   document.getElementById('add-new-plant').style.display = 'none';
  // }

  // createFormControls(formType: string) {
  //   if(formType === 'old') {
  //     this.oldPlantCategory= new FormControl('', Validators.required);
  //     this.oldPlantName= new FormControl('', Validators.required);
  //   }
  // }

  // createForm(formType: string) {
  //   if(formType === 'old') {
  //     this.addOldPlantForm = this.fb.group({
  //       oldPlantCategory: this.oldPlantCategory,
  //       oldPlantName: this.oldPlantName,
  //     });
  //   }
  // }

  // handleSend(param){
  //   this.modalService.dismissAll();
  // }


  // enablePriceInput(event) {
  //   this.showEmptyOrderError = false;
  //   const nameAttr = event.target.getAttribute("name");
  //   if (event.target.checked) {
  //     (<HTMLInputElement>document.getElementById(nameAttr)).disabled = false;
  //   } else {
  //     (<HTMLInputElement>document.getElementById(nameAttr)).disabled = true;
  //   }
  // }

  // onAddOldPlant(form:FormGroup) {
  //   console.log(form.value.oldPlantCategory);
  //   console.log(form.value.oldPlantName);
  // }

  // requests methods
  // getPlantsCategories() {
  //   this.plantationService.addPlantFormGetPlantCategories().subscribe(
  //     (res:AddPlantCatRes) => {
  //       this.plantCategories = res;
  //     }
  //   )
  // }

  // onSelectCategory() {
  //   let catName = this.oldPlantCategory.value;
  //   this.selectedCategory = catName;
  //   console.log('after selection selected cat',this.selectedCategory);
  //   (<HTMLInputElement>document.getElementById('newPlantName')).disabled = false;

  //   // this.plantationService.addPlantFormGetCatPlants(catName).subscribe(
  //   //   (res: AddCatPlantsRes) => {
  //   //     this.catPlants = res;
  //   //   }
  //   // )
  // }

}

