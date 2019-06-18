import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {
  forumInitUrl: string;
  //domainUrl = "http://192.168.137.115:9999/api/client/orders/"
  constructor(
    private http: HttpClient,
    private httpService: HttpServiceService
  ) {
    this.forumInitUrl = "./assets/forumPageLoad.json";
    // this.forumInitUrl = 'plants/forum';

  }

  initiateInitForumRequest() {
    return this.http.get(this.forumInitUrl);
    // return this.httpService.getRequest(this.forumInitUrl);
  }

  getCategoryQuestions(catId) {
    console.log("fetching forum question data for cat : " + catId);
    // let catUrl = 'plants/forum'

    // return this.http.get(this.forumInitUrl + '/' + catName);
    // console.log(`${this.forumInitUrl}/${catId}`);
    return this.httpService.getRequest(`${this.forumInitUrl}/${catId}`);
  }


}

