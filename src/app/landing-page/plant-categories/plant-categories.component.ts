import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { WavesModule } from 'angular-bootstrap-md'
import { PlantCategory, plantCatInfo } from '../../interfaces/plant-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plant-categories',
  templateUrl: './plant-categories.component.html',
  styleUrls: ['./plant-categories.component.scss']
})
export class PlantCategoriesComponent implements OnInit {

  plantCatUrl: 'https://reqres.in/api/unknown';
  plantCatUrlRes: {};
  plantCategories: PlantCategory[];
  singleCatPlants: plantCatInfo[];


// dummy obj

plantOBJ = {
  // categories array
  plantCats : [
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    },
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    },
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    },
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    },
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    },
    {
      id: 1, name: 'اعشاب', Ename: 'rosemary'
    }
  ],
  // plants array
  singleCatPlants: [
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    },
    {
      id: 1, img: '../../../assets/imgs/landingPage/categories-silder/rose-mery1.png', name: 'روزمارى'
    }
  ]
}


  constructor( private http: HttpClient ) { }

  ngOnInit() {

    // this.getPlantCategories();
    this.destructRes(this.plantOBJ);
    // this.setCatActiveState();
  }

  getPlantCategories() {
    this.http.get(this.plantCatUrl).subscribe(
      res => {
        this.plantCatUrlRes = res;
        this.destructRes(this.plantCatUrlRes);
      },
      error => {
        console.log(error);
      }
    )
  }
  destructRes(categories) {
    // destruction must match obj keys 
    const {plantCats, singleCatPlants} = categories;
    this.plantCategories = plantCats;
    this.singleCatPlants = singleCatPlants;
  }

  // setCatActiveState() {
  //   if(document.getElementsByClassName('category')[0]) {
  //     console.log(document.getElementsByClassName('category')[0]);
  //   }
  // }


}
  
