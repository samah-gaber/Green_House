import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { WavesModule } from 'angular-bootstrap-md'
import { plantCatInfo, PlantCatRes } from '../../interfaces/plant-interface';
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
    const catName = ev.target.innerHTML;
    const catId = ev.target.getAttribute('id');
    let catData;
    if(this.userData) {
      if(this.userData.role == 2) {
        catData = catId;
      }
    } else {
      catData = catName;
    }
    console.log('event.target ' , ev.target);
    console.log('event.target.getAttribute ' , ev.target.getAttribute('id'));
    console.log('category name ' , catName);
    console.log('category id ' , catId);
    console.log('category data ' , catData);
    this.plantService.plantsSingleCatGetRequest(catData).subscribe(
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

