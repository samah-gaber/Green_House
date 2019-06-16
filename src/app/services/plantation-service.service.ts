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

  sendFormData(data){
    const bodyObject =
                {comment: data,
                plantation_id: this.userData.userId };
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.postRequest(url, bodyObject);
  }

  deleteData(id){
    const bodyObject = {
      plantId : id
    };
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.postRequest(url, bodyObject);
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
}
