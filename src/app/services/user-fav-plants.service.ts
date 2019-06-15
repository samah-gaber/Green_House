import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { DomainService } from './domain.service';
import { UserFavPlant } from '../interfaces/plant-interface';
import { UserService } from './user.service';
import { HttpServiceService } from './http-service.service';

@Injectable()
export class UserFavPlantsService {

  // domainURL = this.domain.getDomain();
  // dynamicURL: string;
  urlGetFav= `client/getfavorites`;
  urlAddToFav = `client/addfavorite`;
  urlremoveFromFav = `client/removefavorite`;
  // userToken;
  // headers;

  constructor( 
    private http: HttpClient,
    // private domain: DomainService,
    private userService: UserService,
    private httpService: HttpServiceService
  ) {
    // creating new header instance
    // this.headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.userToken}`,
    //   'Content-Type': 'application/json'
    // });

    // if(this.userService.returnAuthUserData()) {
    //   this.userToken = this.userService.returnAuthUserData().token;
    // }
  }

  // add plant to favorites using http header
  addToFav(plantId) {
    debugger;
    let url = `${this.urlAddToFav}/${plantId}`;
    // return this.http.get( `${this.urlAddToFav}/${plantId}`, {
    //   'headers': this.headers
    // });
    return this.httpService.getRequest(url);
  }
  
  removeFromFav(plantId) {
    let url = `${this.urlremoveFromFav}/${plantId}`;    
    // return this.http.get( `${this.urlremoveFromFav}/${plantId}`, {
      //   'headers': this.headers
      // });
      return this.httpService.getRequest(url);
    }
    
    getFavPlants() {
      // let url = `client/getfavorites`;
      // return this.http.get( this.urlGetFav, {
        //   // 'params': new HttpParams().set('plantid', ),
        //   'headers': this.headers
        // });
        return this.httpService.getRequest(this.urlGetFav);
  }
  // getFavPlants(url) {
  //   this.dynamicURL = url;
  //   this.urlGetFav = `${this.domainURL}/Client/Getfavorites${this.dynamicURL}`;
  //   return this.http.get( this.urlGetFav, {
      
  //   });
  // }

}
