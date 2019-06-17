import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor() { }

  generateTimeStamp(){
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const fullDateString = month + "/" + day + "/" + year;
    // const fullDateString = day + "/" + month + "/" + year;
    return fullDateString;
  }
}
