import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-carousels',
  templateUrl: './landing-page-carousels.component.html',
  styleUrls: ['./landing-page-carousels.component.scss'],

})
export class LandingPageCarouselsComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() {

   }

  ngOnInit() {
  }

}
