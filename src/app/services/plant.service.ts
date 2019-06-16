import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
// import { DomainService } from './domain.service';

@Injectable()
export class PlantService {

  constructor(
    private http: HttpClient,
    private httpService: HttpServiceService
    // private domain: DomainService
  ) { }

  // domainURL = this.domain.getDomain();
  // dynamicURL: string;
  plantsURL: string;
  plantsCatURL: string;

  plantsGetRequest(url) {
    // this.dynamicURL = url;
    this.plantsURL = `/plants${url}`;
    // this.plantsURL = `${this.domainURL}/plants${this.dynamicURL}`;
    console.log('url: ' + this.plantsURL);
    // return this.http.get(this.plantsURL);
    //return this.http.get("./assets/genericQuestionObject.json");
    return this.httpService.getRequest(this.plantsURL);
  }

  
  // plantsCatGetRequest() {
  //   return this.http.get("./assets/plantCatRes.json");
  // }

  // home plant categories
  plantsCatGetRequest() {
    this.plantsCatURL = `plants/categories`;
    console.log('url: ' + this.plantsCatURL);
    // return this.http.get(this.plantsCatURL);
    return this.httpService.getRequest(this.plantsCatURL);
  }

  plantsSingleCatGetRequest(url) {
    this.plantsCatURL = `plants/category/${url}`;
    console.log('url: ' + this.plantsCatURL);
    // return this.http.get(this.plantsCatURL);
    return this.httpService.getRequest(this.plantsCatURL);
  }
}
