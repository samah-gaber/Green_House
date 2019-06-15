import { UserService } from './user.service';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { AuthUserData } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class PlantationServiceService {
  userData: AuthUserData;
  constructor(private httpService: HttpServiceService, private userService : UserService) {
    this.userData = this.userService.returnAuthUserData();
   }

  sendFormData( data, plantId) {
    const bodyObject =
                {
                comment: data,
                plant_id: plantId,
                };
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.sendRequest(url, bodyObject);
  }

  deleteData(id){
    const bodyObject = {
      plantId : id
    };
    const url = 'http://192.168.43.132:9999/api/client/insertQuestion/112';
    return this.httpService.sendRequest(url, bodyObject);
  }
}
