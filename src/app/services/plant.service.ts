import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { UserService } from './user.service';
import { AuthUserData } from '../interfaces/user-interface';
// import { DomainService } from './domain.service';

@Injectable()
export class PlantService {

  authUserData: AuthUserData;

  constructor(
    private http: HttpClient,
    private httpService: HttpServiceService,
    private userService: UserService
    // private domain: DomainService
  ) {
    if (userService.returnAuthUserData()) {
      this.authUserData = userService.returnAuthUserData();
    }
  }

  // domainURL = this.domain.getDomain();
  // dynamicURL: string;
  plantsURL: string;
  plantsCatURL: string;

  plantsGetRequest(url) {
    this.plantsURL = `/plants${url}`;
    console.log('url: ' + this.plantsURL);
    // return this.httpService.getRequest("./assets/genericQuestionObject.json");
    return this.httpService.getRequest(this.plantsURL);
  }

  // home plant categories
  plantsCatGetRequest() {
    if(this.authUserData) {
      if(this.authUserData.role == 2) {
        this.plantsCatURL = `plantations/plantation`
      } else {
        this.plantsCatURL = `plants/categories`;
      }
    } else {
      this.plantsCatURL = `plants/categories`;
    }

    this.plantsCatURL = `/assets/plantCategories.json`;
    return this.httpService.getRequest(this.plantsCatURL);
  }

  plantsSingleCatGetRequest(catData) {
    if(this.authUserData) {
      if(this.authUserData.role ==2) {
        this.plantsCatURL = `plantations/category/${catData}`
      } else {
        this.plantsCatURL = `plants/category/${catData}`;
      }
    }
    else {
      this.plantsCatURL = `plants/category/${catData}`;
    }
    console.log('url: ' + this.plantsCatURL);
    // return this.http.get(this.plantsCatURL);
    return this.httpService.getRequest(this.plantsCatURL);
  }
}
