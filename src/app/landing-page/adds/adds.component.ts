import { Component, OnInit, ViewChild } from '@angular/core';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.scss']
})
export class AddsComponent implements OnInit {

  @ViewChild('myCarousel') myCarousel;  
  

  constructor() { }

  ngOnInit() {
  }

  previousSlide() {
    // document.getElementsByClassName('carousel').carousel('prev');
    this.myCarousel.previousSlide();
  }
  nextSlide() {
    // document.getElementsByClassName('carousel').carousel('next');
    this.myCarousel.nextSlide();
  }

}
