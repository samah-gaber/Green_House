import { Component, OnInit } from '@angular/core';
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
import { PlantationServiceService } from '../../services/plantation-service.service';
import { AddPlantCatRes, AddCatPlantsRes, GetPlantFertTypes } from '../../interfaces/plantation-interface';

@Component({
  selector: 'app-add-new-plant-form',
  templateUrl: './add-new-plant-form.component.html',
  styleUrls: ['./add-new-plant-form.component.scss']
})
export class AddNewPlantFormComponent implements OnInit {

  selectedCategory: string;
  showOldEmptyOrderError = false;
  sentOldPlant;
  sentNewPlant;
  
  
  // plantCategories: AddPlantCatRes;  
  // catPlants: AddCatPlantsRes;
  // fertTypes: GetPlantFertTypes

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
  oldPlantType: FormGroup;
  oldPlantCategory: FormControl;
  oldPlantName: FormControl;
  oldGraftType: FormControl;
  oldGraftPrice: FormControl;
  oldSeedsType: FormControl;
  oldSeedsPrice: FormControl;
  oldSoilType: FormControl;
  oldSoilPrice: FormControl;
  oldFertType: FormControl;
  oldFertPrice: FormControl;
 
  // new plant form
  addNewPlantForm: FormGroup;
  newPlantType: FormGroup;
  newPlantCategory: FormControl;
  newPlantName: FormControl;
  newGraftType: FormControl;
  newGraftPrice: FormControl;
  newSeedsType: FormControl;
  newSeedsPrice: FormControl;
  newSoilType: FormControl;
  newSoilPrice: FormControl;
  newFertType: FormControl;
  newFertPrice: FormControl;
  newPlantSeason: FormControl;
  newPlantHumidity: FormControl;
  newPlantWind: FormControl;
  newPlantIrrigation: FormControl;
  newPlantSteps: FormControl; 
  newPlantInfo: FormControl; 
  
  
  constructor(
    private fb: FormBuilder,
    private plantationService: PlantationServiceService
  ) { }

  ngOnInit() {

    // document.getElementById('add-new-plant').style.display = 'none';
    (<HTMLInputElement>document.getElementById('add-new-plant')).style.display = 'none';
    

    // creating old plant form
    this.createFormControls('old');
    this.createForm('old');

    // creating new plant form
    this.createFormControls('new');
    this.createForm('new');

  }

  validateOrderForm(formGroup: FormGroup, indicator) {
    if (indicator === 'old') {
      if (
        !formGroup.controls["oldGraftType"].value &&
        !formGroup.controls["oldSeedsType"].value &&
        !formGroup.controls["oldSoilType"].value &&
        !formGroup.controls["oldFertType"].value
      ) {
        return { validateOrderForm: true };
      } else {
        return null;
      }
    } else if (indicator === 'new') {
      if (
        !formGroup.controls["newGraftType"].value &&
        !formGroup.controls["newSeedsType"].value &&
        !formGroup.controls["newSoilType"].value &&
        !formGroup.controls["newFertType"].value
      ) {
        return { validateOrderForm: true };
      } else {
        return null;
      }
    }
  }

  createFormControls(formType: string) {
    if(formType === 'old') {
      this.oldPlantCategory= new FormControl('', Validators.required);
      this.oldPlantName= new FormControl('', Validators.required);
      this.oldGraftType= new FormControl('');
      this.oldGraftPrice= new FormControl('', [
        // Validators.required,
        CustomValidators.digits
      ]);
      this.oldSeedsType= new FormControl('');
      this.oldSeedsPrice= new FormControl('', [
        // Validators.required,
        CustomValidators.digits
      ]);
      this.oldSoilType= new FormControl('');
      this.oldSoilPrice= new FormControl('', [
        // Validators.required,
        CustomValidators.digits
      ]);
      this.oldFertType= new FormControl('');
      this.oldFertPrice= new FormControl('', [
        // Validators.required,
        CustomValidators.digits
      ]);
    } else if(formType === 'new'){
      this.newPlantCategory= new FormControl('', Validators.required);
      this.newPlantName= new FormControl('', Validators.required);
      this.newGraftType= new FormControl('');
      this.newGraftPrice= new FormControl('', [
        Validators.required,
        CustomValidators.digits
      ]);
      this.newSeedsType= new FormControl('');
      this.newSeedsPrice= new FormControl('', [
        Validators.required,
        CustomValidators.digits
      ]);
      this.newSoilType= new FormControl('');
      this.newSoilPrice= new FormControl('', [
        Validators.required,
        CustomValidators.digits
      ]);
      this.newFertType= new FormControl('');
      this.newFertPrice= new FormControl('', [
        Validators.required,
        CustomValidators.digits
      ]);
      this.newPlantSeason = new FormControl('', Validators.required);
      this.newPlantHumidity = new FormControl('high', Validators.required);
      this.newPlantWind = new FormControl('resist', Validators.required);
      this.newPlantIrrigation = new FormControl('', Validators.required);
      this.newPlantSteps = new FormControl('', Validators.required);
      this.newPlantInfo = new FormControl('');
    }
  }

  createForm(formType: string) {
    if(formType === 'old') {
      this.addOldPlantForm = this.fb.group({
        oldPlantCategory: this.oldPlantCategory,
        oldPlantName: this.oldPlantName,
        oldPlantType: this.fb.group({
          oldGraftType: this.oldGraftType,
          oldGraftPrice: this.oldGraftPrice,
          oldSeedsType: this.oldSeedsType,
          oldSeedsPrice: this.oldSeedsPrice,
          oldSoilType: this.oldSoilType,
          oldSoilPrice: this.oldSoilPrice,
          oldFertType: this.oldFertType,
          oldFertPrice: this.oldFertPrice
        },
        {
          validator: (formGroup: FormGroup) => {
          return this.validateOrderForm(formGroup, 'old');
          }
        }
      )
      });
    } else if (formType === 'new') {
      this.addNewPlantForm = this.fb.group({
        newPlantCategory: this.newPlantCategory,
        newPlantName: this.newPlantName,
        newPlantType: this.fb.group({
          newGraftType: this.newGraftType,
          newGraftPrice: this.newGraftPrice,
          newSeedsType: this.newSeedsType,
          newSeedsPrice: this.newSeedsPrice,
          newSoilType: this.newSoilType,
          newSoilPrice: this.newSoilPrice,
          newFertType: this.newFertType,
          newFertPrice: this.newFertPrice
        },
        {
          validator: (formGroup: FormGroup) => {
          return this.validateOrderForm(formGroup, 'new');
          }
        }
      ),
        newPlantSeason: this.newPlantSeason,
        newPlantHumidity: this.newPlantHumidity,
        newPlantWind: this.newPlantWind,
        newPlantIrrigation: this.newPlantIrrigation,
        newPlantSteps: this.newPlantSteps,
        newPlantInfo: this.newPlantInfo
      });
    }
  }

   // plantation adding new plant form
  // this function toggles between the tabs
  showTabForm(event) {
    let tabName = event.target.getAttribute('name');
    console.log('tabName', tabName);
    let buttons = document.querySelectorAll('.tab-btn');
    console.log('buttons', buttons);
    buttons.forEach(element => {
      console.log('buttons element', element);
      (<HTMLInputElement>element).classList.remove('active');
    });
    event.target.classList.add('active');
    
    let formsArr = document.querySelectorAll('.add-plant-form');
    console.log('formsArr', formsArr);
    // formsArr.forEach(element => {
    //   console.log('forms arr element', element);
    //   (<HTMLInputElement>element).style.display = 'none';
    // });



    // success !!!!!!!!!!!!
    Array.from(formsArr).forEach((el) => { 
      console.log(el);
      el.setAttribute('style', 'display:none');
    });

    // for(let node in formsArr){
    //   console.log(node);
    //   console.log(formsArr[node]);
    //   console.log(<HTMLInputElement>formsArr[node]);
    //   // formsArr[node].style.display = 'none';
    //   // (<HTMLInputElement>formsArr[node]).style.display = 'none';
    //   //formsArr[node].setAttribute('style', 'display:none');
    // }
    (<HTMLInputElement>document.getElementById(tabName)).style.display = 'block';
  }

  enablePriceInput(event) {
    this.showOldEmptyOrderError = false;
    const nameAttr = event.target.getAttribute("name");
    if (event.target.checked) {
      (<HTMLInputElement>document.getElementById(nameAttr)).disabled = false;
    } else {
      (<HTMLInputElement>document.getElementById(nameAttr)).disabled = true;
    }
  }


  // requests methods
  onAddOldPlant(form:FormGroup) {
    console.log('enter onAddOldPlant');
    if(form.valid) {
      console.log('form submitted');
      this.sentOldPlant = {
        plant: {
          plantId: form.value.oldPlantName,
          itemContents: []
        }
      };
      // console.log('form.value.oldGraftType', this.oldGraftPrice);
      // console.log('form.value.oldSeedsType', this.oldSeedsType);
      // console.log('form.value.oldSoilType', this.oldSoilType);
      // console.log('form.value.oldFertType', this.oldFertType);

      if(this.oldGraftType.value) {
        console.log('form.value.oldGraftType', this.oldGraftType.value);
        let graftPrice = form.value.oldGraftPrice;
        this.addItemToPlant(graftPrice, 'graft');
      };
      if(this.oldSeedsType.value) {
        console.log('form.value.oldSeedsType', this.oldSeedsType.value);
        let seedsPrice = form.value.oldSeedsPrice;
        this.addItemToPlant(seedsPrice, 'seeds');
      };
      if(this.oldSoilType.value) {
        console.log('form.value.oldSoilType', this.oldSoilType.value);
        let soilPrice = form.value.oldSoilPrice;
        this.addItemToPlant(soilPrice, 'soil');
      };
      if(this.oldFertType.value) {
        console.log('form.value.oldFertType', this.oldFertType.value);
        let fertPrice = form.value.oldSoilPrice;
        this.addItemToPlant(fertPrice, 'fert');
      };
      console.log('before submit', this.sentOldPlant);

      this.submitAddedPlant('old');
    } else {
      this.showOldEmptyOrderError = true;
    }

  }

  addItemToPlant(price, type) {
    console.log(' this.sentOldPlant.itemContents', this.sentOldPlant.itemContents);
    this.sentOldPlant.plant.itemContents.push({
      type: type,
      price: price
    })
  }



  getPlantsCategories() {
    // this.plantationService.addPlantFormGetPlantCategories().subscribe(
    //   (res:AddPlantCatRes) => {
    //     this.plantCategories = res;
    //   }
    // )
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

  onSelectPlant() {
    let plantId = this.oldPlantName.value;
    // this.plantationService.addPlantFormGetFertTypes(plantId).subscribe(
    //   (res: GetPlantFertTypes) => {
    //     this.fertTypes = res;
    //   }
    // )
  }

  submitAddedPlant(indicator) {
    if(indicator == 'old') {
      // this.plantationService.submitOldPlant(this.sentOldPlant);
      console.log('after submit', this.sentOldPlant);
    }
  }


}
