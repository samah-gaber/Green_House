import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PlantPlantationsObj {
  plantation : [
    {
      plantationID: number,
      plantationName: string,
      price: number
    }
  ]
}

@Component({
  selector: 'app-plantation-order-cards',
  templateUrl: './plantation-order-cards.component.html',
  styleUrls: ['./plantation-order-cards.component.scss']
})

export class PlantationOrderCardsComponent implements OnInit {

  @Input() plantId;
  plantPlantationsObj: PlantPlantationsObj;
  plantPlantationsUrl = '';
  
  constructor( private http: HttpClient ) { }
  
  ngOnInit() {
    this.plantPlantationsUrl = `http://192.168.137.155:9999/api/plants/plantationlist/${this.plantId}`;
    this.getPlantDetails();
  }

  getPlantDetails() {
    this.http.get(this.plantPlantationsUrl).subscribe( (res: PlantPlantationsObj) => {
     console.log('res arrived');
     console.log(res);
      this.plantPlantationsObj = res;
    },
    error => {
      console.log(error);
    })
  }

}
