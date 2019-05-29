import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  plantationsUrl: 'https://reqres.in/api/unknown';
  plantationNamesUrlRes: {};
  plantations;


  // dummy obj
  plantationObj = {
    plantations: [
      { id: 1, name: 'مشتل البلكونة' },
      { id: 1, name: 'مشتل البلكونة' },
      { id: 1, name: 'مشتل البلكونة' },
      { id: 1, name: 'مشتل البلكونة' }
    ]
  }

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    // this.getPlantationNames();
    this.destructRes(this.plantationObj);
  }

  getPlantationNames() {
    this.http.get(this.plantationsUrl).subscribe(
      res => {
        this.plantationNamesUrlRes = res;
        this.destructRes(this.plantationNamesUrlRes);
      },
      error => {
        console.log(error);
      }
    )
  }

  destructRes(plantationNames) {
    // destruction must match obj keys     
    const {plantations} = plantationNames;
    this.plantations = plantations;
  }

}
