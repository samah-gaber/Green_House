import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFavPlant } from '../interfaces/user-interface';
import { DomainService } from './domain.service';

@Injectable()
export class UserFavPlantsService {

  domainURL = this.domain.getDomain();
  dynamicURL: string;
  plantsURL: string;
  urlAddToFav = 'https://reqres.in/api/register';
  urlremoveFromFav = 'https://reqres.in/api/register';
  urlGetFav = 'https://reqres.in/api/register/id';

  constructor( 
    private http: HttpClient,
    private domain: DomainService
  ) { }

  addToFav(userFavPlantData: UserFavPlant) {
    return this.http.post( this.urlAddToFav, userFavPlantData );
  }

  removeFromFav(userFavPlantData: UserFavPlant) {
    return this.http.post( this.urlremoveFromFav, userFavPlantData );
  }

  getFavPlants(url) {
    this.dynamicURL = url;
    this.plantsURL = `${this.domainURL}/Client/Getfavorites${this.dynamicURL}`;
    return this.http.get( this.urlGetFav );
  }

}
