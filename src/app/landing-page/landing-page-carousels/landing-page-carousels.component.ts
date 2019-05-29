import { Component, OnInit, ViewChild } from '@angular/core';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-landing-page-carousels',
  templateUrl: './landing-page-carousels.component.html',
  styleUrls: ['./landing-page-carousels.component.scss'],

})
export class LandingPageCarouselsComponent implements OnInit {

  @ViewChild('myCarousel') myCarousel;
  
  constructor() {

   }

  ngOnInit() {
  }

  previousSlide() {
    this.myCarousel.previousSlide();
  }
  nextSlide() {
    this.myCarousel.nextSlide();
  }

}
