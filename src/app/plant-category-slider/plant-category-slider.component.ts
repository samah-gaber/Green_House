import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-category-slider',
  templateUrl: './plant-category-slider.component.html',
  styleUrls: ['./plant-category-slider.component.scss']
})
export class PlantCategorySliderComponent implements OnInit {
  mostPopular = [1, 2, 3, 4].map(() => `https://picsum.photos/id/237/900/500`);
  vegetables = [1, 2, 3, 4].map(() => `https://picsum.photos/id/248/900/500`);
  // fruits: any;
  // herbs: any;
  // flowers: any;
  // decorationTree: any;
  // Aromatics: any;
  images: any;
  constructor() {
    this.images = this.mostPopular;
  }

  ngOnInit() {
  }

  buttonOneClick() {
    console.log( "I clicked button 1");
    this.images = this.mostPopular;
  }

  buttonTwoClick() {
    console.log("I clicked button 2");
    this.images = this.vegetables;
  }
  buttonClick(event) {
    console.log(event);
  }
}
