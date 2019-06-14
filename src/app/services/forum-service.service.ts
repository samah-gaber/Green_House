import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {
  forumInitUrl: string;
  //domainUrl = "http://192.168.137.115:9999/api/client/orders/"
  constructor(private http: HttpClient) {
    this.forumInitUrl = "./assets/forumPageLoad.json";
    // this.forumInitUrl = 'http://192.168.43.132:9999/api/plants/forum';

  }

  initiateInitForumRequest(): Observable<any> {
    return this.http.get(this.forumInitUrl);
  }

  getCategoryQuestions(catName):Observable<any> {
    console.log("fetching forum question data for cat : " + catName);

    return this.http.get(this.forumInitUrl + '/' + catName);
  }


}

