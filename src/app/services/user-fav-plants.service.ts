import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFavPlant } from '../interfaces/user-interface';

@Injectable()
export class UserFavPlantsService {

  urlAddToFav = 'https://reqres.in/api/register';
  urlremoveFromFav = 'https://reqres.in/api/register';
  urlGetFav = 'https://reqres.in/api/register/id';

  constructor( 
    private http: HttpClient
  ) { }

  addToFav(userFavPlantData: UserFavPlant) {
    return this.http.post( this.urlAddToFav, userFavPlantData );
  }

  removeFromFav(userFavPlantData: UserFavPlant) {
    return this.http.post( this.urlremoveFromFav, userFavPlantData );
  }

  getFavPlants(userId) {
    return this.http.get( this.urlGetFav );
  }

}
