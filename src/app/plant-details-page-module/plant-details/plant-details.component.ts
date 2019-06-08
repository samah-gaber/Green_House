import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { PlantDetailsOBJ } from '../../interfaces/plant-interface';


@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {

  @Input() plantId;
  plantDetailsObj: PlantDetailsOBJ;
  plantDetailsUrl = '';

  constructor(
    private plantService: PlantService
  ) { }
  
  ngOnInit() {
    this.plantDetailsUrl = `/details/${this.plantId}`;
    this.getPlantDetails();
  }

  getPlantDetails() {
    this.plantService.plantsGetRequest(this.plantDetailsUrl).subscribe( (res: PlantDetailsOBJ) => {
      console.log(res);
      console.log(res.plant.plant_fertilizerz[0].name);
      this.plantDetailsObj = res;
      console.log(this.plantDetailsObj.plant.plant_fertilizerz);
    },
    error => {
      console.log(error);
    })
  }

}
