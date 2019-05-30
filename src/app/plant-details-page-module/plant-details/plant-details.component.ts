import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PlantDetailsOBJ {
  plant : {
    plant_id: number,
    plant_name: string,
    plant_image: string,
    plant_category_name: string,
    plant_soil_name: string,
    plant_steps: string,
    plant_humidity: string,
    plant_season: string,
    plant_wind: string,
    plant_irrigation: string,
    plant_lightning: string,
    plant_information: string,
    plant_fertilizerz: {}[]
  },
 
}

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {

  @Input() plantId;
  plantDetailsObj: PlantDetailsOBJ;
  plantDetailsUrl = '';

  constructor( private http: HttpClient ) { }
  
  ngOnInit() {
    console.log(this.plantId);
    this.plantDetailsUrl = `http://192.168.137.155:9999/api/plants/details/${this.plantId}`;
    console.log(this.plantDetailsUrl);
    this.getPlantDetails();
  }

  getPlantDetails() {
    this.http.get(this.plantDetailsUrl).subscribe( (res: PlantDetailsOBJ) => {
     console.log('res arrived');
     console.log(res);
      this.plantDetailsObj = res;
    },
    error => {
      console.log(error);
    })
  }

}
