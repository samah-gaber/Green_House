import { UserService } from './user.service';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { AuthUserData } from '../interfaces/user-interface';

@Injectable()
export class PlantationServiceService {
  userData : AuthUserData;
  constructor(
    private httpService: HttpServiceService, 
    private userService : UserService
  ) {
    this.userData = this.userService.returnAuthUserData();
   }

  sendFormData(data, plantId){
    const bodyObject = {
      comment: data,
      plant_id: plantId 
    };
    const url = 'plantations/comment';
    return this.httpService.postRequest(url, bodyObject);
  }

  deleteData(plantId){
    // const bodyObject = {
    //   plantId : id
    // };
    const url = `plantations/removeplant/${plantId}`;
    return this.httpService.getRequest(url);
  }

  // plantation add plant
  // get plant categories
  addPlantFormGetPlantCategories() {
    let url = ``;
    return this.httpService.getRequest(url);
  }
  
  // get category plants
  addPlantFormGetCatPlants(catName) {
    let url = `/${catName}`;
    return this.httpService.getRequest(url);
  }

  // get fert types
  addPlantFormGetFertTypes(plantId) {
    let url = `/${plantId}`;
    return this.httpService.getRequest(url);
  }

  // submit the added old plant
  submitPlant( plantObj, indicator, plantId? ) {
    let url = '';
    if(indicator == 'old') {
      url = `/${plantId}`;
    } else if(indicator == 'new') {
      url = ``;
    }
    return this.httpService.postRequest(url, plantObj);
  }
}
