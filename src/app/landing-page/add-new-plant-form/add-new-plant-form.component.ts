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
import { Router } from '@angular/router';

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
  sentOldPlantId;
  
  
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

  // months array
  months = [
    {
      name: 'يناير',
      value: 'Jan'
    },
    {
      name: 'فبراير',
      value: 'Feb'
    },
    {
      name: 'مارس',
      value: 'Mar'
    },
    {
      name: 'ابريل',
      value: 'Apr'
    },
    {
      name: 'مايو',
      value: 'May'
    },
    {
      name: 'يونيو',
      value: 'Jun'
    },
    {
      name: 'يوليو',
      value: 'Jul'
    },
    {
      name: 'اغسطس',
      value: 'Aug'
    },
    {
      name: 'سبتمبر',
      value: 'Sep'
    },
    {
      name: 'اكتوبر',
      value: 'Oct'
    },
    {
      name: 'نوفمبر',
      value: 'Nov'
    },
    {
      name: 'ديسمبر',
      value: 'Dec'
    },
  ]

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
  // newSoilType: FormControl;
  // newSoilPrice: FormControl;
  // newFertType: FormControl;
  // newFertPrice: FormControl;
  newPlantSeason: FormControl;
  newPlantHumidity: FormControl;
  newPlantWind: FormControl;
  newPlantIrrigation: FormControl;
  newPlantSteps: FormControl; 
  newPlantInfo: FormControl; 
  
  
  constructor(
    private fb: FormBuilder,
    private plantationService: PlantationServiceService,
    private router: Router
  ) { }

  ngOnInit() {

    // document.getElementById('add-new-plant').style.display = 'none';
    (<HTMLInputElement>document.getElementById('add-new-plant')).setAttribute('style','display:none');

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
        !formGroup.controls["newSeedsType"].value 
        // &&
        // !formGroup.controls["newSoilType"].value &&
        // !formGroup.controls["newFertType"].value
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
        CustomValidators.digits
      ]);
      this.newSeedsType= new FormControl('');
      this.newSeedsPrice= new FormControl('', [
        CustomValidators.digits
      ]);
      // this.newSoilType= new FormControl('');
      // this.newSoilPrice= new FormControl('', [
      //   Validators.required,
      //   CustomValidators.digits
      // ]);
      // this.newFertType= new FormControl('');
      // this.newFertPrice= new FormControl('', [
      //   Validators.required,
      //   CustomValidators.digits
      // ]);
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
          // newSoilType: this.newSoilType,
          // newSoilPrice: this.newSoilPrice,
          // newFertType: this.newFertType,
          // newFertPrice: this.newFertPrice
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
    let buttons = document.querySelectorAll('.tab-btn');

    Array.from(buttons).forEach( el => {
      el.classList.remove('active');
    })
    event.target.classList.add('active');
    
    let formsArr = document.querySelectorAll('.add-plant-form');

    Array.from(formsArr).forEach((el) => { 
      console.log(el);
      el.setAttribute('style', 'display:none');
    });

    (<HTMLInputElement>document.getElementById(tabName)).setAttribute('style', 'display:block');
  }

  enablePriceInput(event, indicator) {
    // this.showOldEmptyOrderError = false;
    // debugger;
    let nameAttr = event.target.getAttribute("name");
    if(indicator == 'old') {
      nameAttr = `old${nameAttr}`;
    } else if(indicator == 'new') {
      nameAttr = `new${nameAttr}`;
    }
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
      let plantName = form.value.oldPlantName;
      console.log('plantName', plantName);
      
      this.catPlants.plant.forEach(elt => {
        if(plantName == elt.name) {
          this.sentOldPlantId = elt.id;
        }
      });
      console.log('form submitted');
      this.sentOldPlant = {
        plant: {
          itemContents: []
        }
      };

      if(this.oldGraftType.value) {
        console.log('form.value.oldGraftType', this.oldGraftType.value);
        let graftPrice = this.oldGraftPrice.value;
        this.addItemToPlant(graftPrice, 'plant', 'old');
      };
      if(this.oldSeedsType.value) {
        console.log('form.value.oldSeedsType', this.oldSeedsType.value);
        let seedsPrice = this.oldSeedsPrice.value;
        this.addItemToPlant(seedsPrice, 'seed', 'old');
      };
      if(this.oldSoilType.value) {
        console.log('form.value.oldSoilType', this.oldSoilType.value);
        let soilPrice =  this.oldSoilPrice.value;
        this.addItemToPlant(soilPrice, 'soil', 'old');
      };
      if(this.oldFertType.value) {
        console.log('form.value.oldFertType', this.oldFertType.value);
        let fertPrice = this.oldFertPrice.value;
        this.addItemToPlant(fertPrice, 'fertilizer', 'old');
      };
      console.log('before submit', this.sentOldPlant);

      this.submitAddedPlant('old');
    } else {
      this.showOldEmptyOrderError = true;
    }

  }

  onAddNewPlant(form: FormGroup) {
    console.log('enter onAddNewPlant');
    if(form.valid) {
      console.log('form submitted');
      let catName = form.value.newPlantCategory;
      let catId;
      console.log('catName', catName);
      this.plantCategories.category.forEach(elt => {
        if(catName == elt.name) {
          catId = elt.id;
        }
      });
      this.sentNewPlant = {
        plant: {
          catid: catId,
          plantname: form.value.newPlantName,
          itemContents: [],
          season: (form.value.newPlantSeason).toString(),
          irrigation: form.value.newPlantIrrigation,
          humidity: form.value.newPlantHumidity,
          wind: form.value.newPlantWind
        }
      };

      if(this.newGraftType.value) {
        console.log('form.value.oldGraftType', this.newGraftType.value);
        let graftPrice = this.newGraftType.value;
        this.addItemToPlant(graftPrice, 'plant', 'new');
      };
      if(this.newSeedsType.value) {
        console.log('form.value.oldSeedsType', this.newSeedsType.value);
        let seedsPrice = this.newSeedsType.value;
        this.addItemToPlant(seedsPrice, 'seed', 'new');
      };
      console.log('before submit', this.sentNewPlant);
      this.submitAddedPlant('new');
      
    }
  }

  addItemToPlant(price, type, indicator) {
    let plantSent;
    if(indicator == 'old') {
      plantSent = this.sentOldPlant;
    } else if (indicator == 'new') {
      plantSent = this.sentNewPlant
    }
    plantSent.plant.itemContents.push({
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

  submitAddedPlant(indicator) {
    let plantObj;
    let submitPlantMethod;
    if(indicator == 'old') {
      plantObj = this.sentOldPlant;
      // submitPlantMethod = this.plantationService.submitPlant(plantObj, indicator, this.sentOldPlantId).subscribe( 
      //   res => {
      //     console.log(res);
      //     this.router.navigateByUrl('/');
      //   }
      // );
    } else if(indicator == 'new') {
      plantObj = this.sentNewPlant;
      // submitPlantMethod = this.plantationService.submitPlant(plantObj, indicator).subscribe( 
      //   res => {
      //     console.log(res);
      //     this.router.navigateByUrl('/');
      //   }
      // );
    }
    console.log(plantObj);
  }

  


}
