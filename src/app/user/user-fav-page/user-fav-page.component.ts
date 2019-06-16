import { Component, OnInit } from '@angular/core';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { userFavPlantsPage, UserFavPlant } from '../../interfaces/plant-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-fav-page',
  templateUrl: './user-fav-page.component.html',
  styleUrls: ['./user-fav-page.component.scss']
})

export class UserFavPageComponent implements OnInit {

  userId;
  userFavUrl: string;
  userFavPlantData: UserFavPlant;
  userFavPlantsArr: userFavPlantsPage;

  // userFavPlantsArr = [
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 2,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 3,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 4,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 5,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 6,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 7,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 8,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   }
  // ]

  constructor( 
    private userFavPlantService: UserFavPlantsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // accessing user id 
    ;
    this.route.queryParams.subscribe(params => {
      this.userId = params.userId;
    });

    // this.userFavUrl = `/${this.userId}`;


    // this.userFavPlantService.getFavPlants(this.userFavUrl).subscribe(
    this.userFavPlantService.getFavPlants().subscribe(
      (res: userFavPlantsPage) => {
        this.userFavPlantsArr = res;
        console.log('res');
        console.log(res);
        console.log('this.userFavPlantsArr');
        console.log(this.userFavPlantsArr);
      },
      error => {
        console.log(error);
      }
    )
  }

  // fav plant handling
  removeFromFav(event, plantId) {
    // const userId = this.userService.returnAuthUserData().userId;
    this.userFavPlantService.removeFromFav(plantId).subscribe(
      res => {
        console.log(res);
        this.userFavPlantsArr.plants.forEach( (elt, index) => {
          if(elt.id == plantId) {
            this.userFavPlantsArr.plants.splice(index, 1);
          }
        });
      },
      error => {
        console.log(error);
      }
    )
    // event.target.closest('.user-single-fav-plant').style.display='none';
  }

  showPlantDetails(plantId, plantName) {
    this.router.navigate(['/', 'plantdetails'], { queryParams: { id: plantId, 'name': plantName } });
  }

}
