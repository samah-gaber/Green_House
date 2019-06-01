// import { Injectable } from '@angular/core';
// import { UserFavPlant } from '../interfaces/user-interface';
// import { Subject } from 'rxjs/Subject';

// @Injectable()
// export class UserFavPlantsArrService {

//   changedFavPlantArr = new Subject();

//   userFavPlantArr: UserFavPlant[] = [
//     // {
//     //   user_id: 1,
//     //   plant_id: 3
//     // },
//     // {
//     //   user_id: 1,
//     //   plant_id: 3
//     // },
//     // {
//     //   user_id: 1,
//     //   plant_id: 3
//     // }
//   ];
  

//   constructor() { }

//   addToFavArr(userFavPlantData) {
//     const favPlantIndex = this.userFavPlantArr.indexOf(userFavPlantData);
//     if ( favPlantIndex == -1 ) {
//       this.userFavPlantArr.push(userFavPlantData);
//     }
//     this.changedFavPlantArr.next(this.userFavPlantArr);
//   }
//   removeFromFavArr(userFavPlantData) {
//     const favPlantIndex = this.userFavPlantArr.indexOf(userFavPlantData);
//     if ( favPlantIndex > -1 ) {
//       this.userFavPlantArr.splice(favPlantIndex, 1);
//     }
//     this.changedFavPlantArr.next(this.userFavPlantArr);    
//   }

//   returnUserFavPlantArr() {
//     return this.userFavPlantArr;
//   }
  
// }
