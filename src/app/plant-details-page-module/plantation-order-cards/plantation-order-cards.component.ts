import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { PlantPlantationsObj } from '../../interfaces/plant-interface';

@Component({
  selector: 'app-plantation-order-cards',
  templateUrl: './plantation-order-cards.component.html',
  styleUrls: ['./plantation-order-cards.component.scss']
})

export class PlantationOrderCardsComponent implements OnInit {

  plantPlantationsObj = {
    plantation: [
      {
        plantationId: 1,
        plantationName: "البلكونة",
        price: 7
      },
      {
        plantationId: 2,
        plantationName: "البلكونة",
        price: 7
      }
    ]
  }

  @Input() plantId;
  @Input() plantName;
  // plantPlantationsObj: PlantPlantationsObj;
  plantPlantationsUrl = '';
  
  constructor(
    private plantService: PlantService
  ) { }
  
  ngOnInit() {
    this.plantPlantationsUrl = `/plantationlist/${this.plantId}`;
    // this.getPlantDetails();
  }

  // getPlantDetails() {
  //   this.plantService.plantsGetRequest(this.plantPlantationsUrl).subscribe( (res: PlantPlantationsObj) => {
  //     this.plantPlantationsObj = res;
  //   },
  //   error => {
  //     console.log(error);
  //   })
  // }

}
