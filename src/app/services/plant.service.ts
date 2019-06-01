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

  plantsGetRequest(url) {
    this.dynamicURL = url;
    this.plantsURL = `${this.domainURL}/plants${url}`;
    return this.http.get(this.plantsURL);
  }
}
