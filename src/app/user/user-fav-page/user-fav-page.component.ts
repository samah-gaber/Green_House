import { Component, OnInit } from '@angular/core';
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { userFavPlantsPage } from '../../interfaces/plant-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-fav-page',
  templateUrl: './user-fav-page.component.html',
  styleUrls: ['./user-fav-page.component.scss']
})

export class UserFavPageComponent implements OnInit {

  userId;
  userFavUrl: string;

  // userFavPlantsArr: userFavPlantsPage[] = [
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   },
  //   {
  //     plantId: 1,
  //     plantImg: '/assets/imgs/mint1.png',
  //     plantName: 'روزمارى',
  //     plantCategory: 'خضروات'
  //   }
  // ]

  constructor( 
    private userFavPlantService: UserFavPlantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // accessing user id 
    this.route.queryParams.subscribe(params => {
      this.userId = params.userId;
      console.log(this.userId);
    });

    this.userFavUrl = `/${this.userId}`;


    this.userFavPlantService.getFavPlants(this.userFavUrl).subscribe(
      (res: userFavPlantsPage[]) => {
        // this.userFavPlantsArr = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
