import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { WavesModule } from 'angular-bootstrap-md'
import { PlantCategory, plantCatInfo, PlantCatRes } from '../../interfaces/plant-interface';
import { HttpClient } from '@angular/common/http';
import { PlantService } from '../../services/plant.service';
import { AuthUserData } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-plant-categories',
  templateUrl: './plant-categories.component.html',
  styleUrls: ['./plant-categories.component.scss']
})
export class PlantCategoriesComponent implements OnInit {

  plantCatsUrl: '';
  plantCatRes: PlantCatRes;
  // plantCategories: PlantCategory[];
  singleCatPlants: plantCatInfo;
  userData : AuthUserData;
  userRole : number;

  constructor(
    private http: HttpClient,
    private plantService: PlantService,
    private userService: UserService
  ) {
    if(this.userService.returnAuthUserData()) {
      this.userData = this.userService.returnAuthUserData();
      this.userRole = this.userData.role;
    }
  }

  ngOnInit() {

    this.getPlantCategories();
    // this.destructRes(this.plantOBJ);
    // this.setCatActiveState();
  }

  getPlantCategories() {
    this.plantService.plantsCatGetRequest().subscribe(
      (res: PlantCatRes) => {
        console.log("initial plant cata response");
        console.log(res);

        this.plantCatRes = res;
      }
    )
  }

  showCatPlants(ev) {
    const catName = ev.target.innerHTML;;
    console.log('category name ' + catName);
    this.plantService.plantsSingleCatGetRequest(catName).subscribe(
      (res: PlantCatRes) => {
        console.log(res);
        this.plantCatRes.plant = res.plant;
      },
      error => {
        console.log(error);
      }
    )
  }


}

