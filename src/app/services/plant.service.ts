import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainService } from './domain.service';

@Injectable()
export class PlantService {

  constructor( 
    private http: HttpClient,
    private domain: DomainService
  ) { }

  domainURL = this.domain.getDomain();
  dynamicURL: string;
  plantsURL: string;
  plantsCatURL: string;

  plantsGetRequest(url) {
    this.dynamicURL = url;
    this.plantsURL = `${this.domainURL}/plants${this.dynamicURL}`;
    console.log('url: ' + this.plantsURL);
    return this.http.get(this.plantsURL);
  }
  
  plantsCatGetRequest() {
    this.plantsCatURL = `${this.domainURL}/plants/categories`;
    console.log('url: ' + this.plantsCatURL);
    return this.http.get(this.plantsCatURL);
  }
  plantsSingleCatGetRequest(url) {
    this.dynamicURL = url;
    this.plantsCatURL = `${this.domainURL}/plants/category/${this.dynamicURL}`;
    console.log('url: ' + this.plantsCatURL);
    return this.http.get(this.plantsCatURL);
  }
}
