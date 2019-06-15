import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DomainService } from './domain.service';
import { UserFavPlant } from '../interfaces/plant-interface';
import { UserService } from './user.service';

@Injectable()
export class UserFavPlantsService {

  domainURL = this.domain.getDomain();
  dynamicURL: string;
  urlGetFav: string;
  urlAddToFav = `${this.domainURL}/client/addfavorite`;
  urlremoveFromFav = `${this.domainURL}/`;
  userToken;
  headers;

  constructor( 
    private http: HttpClient,
    private domain: DomainService,
    private userService: UserService
  ) {
    // creating new header instance
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`,
      'Content-Type': 'application/json'
    });

    if(this.userService.returnAuthUserData()) {
      this.userToken = this.userService.returnAuthUserData().token;
    }
  }

  // add plant to favorites using http header
  addToFav(plantId) {
    return this.http.get( `${this.urlAddToFav}/${plantId}`, {
      'headers': this.headers
    });
  }

  removeFromFav(plantId) {
    return this.http.get( `${this.urlremoveFromFav}/${plantId}`, {
      'headers': this.headers
    });
  }

  getFavPlants() {
    this.urlGetFav = `${this.domainURL}/client/getfavorites`;
    return this.http.get( this.urlGetFav, {
      // 'params': new HttpParams().set('plantid', ),
      'headers': this.headers
    });
  }
  // getFavPlants(url) {
  //   this.dynamicURL = url;
  //   this.urlGetFav = `${this.domainURL}/Client/Getfavorites${this.dynamicURL}`;
  //   return this.http.get( this.urlGetFav, {
      
  //   });
  // }

}
