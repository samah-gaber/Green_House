import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PlantService } from '../../services/plant.service';
import { PlantCommentsObj } from '../../interfaces/plant-interface';

@Component({
  selector: 'app-plantation-comments-carousel',
  templateUrl: './plantation-comments-carousel.component.html',
  styleUrls: ['./plantation-comments-carousel.component.scss']
})
export class PlantationCommentsCarouselComponent implements OnInit {

  @Input() plantId;
  plantCommentsObj: PlantCommentsObj;
  plantcommentsUrl = '';

  showNavigationArrows;
  showNavigationIndicators;

  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  
  constructor(
    config: NgbCarouselConfig,
    private plantService: PlantService
  ) { 
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.plantcommentsUrl = `/comment/${this.plantId}`;
    this.getPlantDetails();
  }

  previousSlide() {
    this.myCarousel.prev();
  }
  nextSlide() {
    this.myCarousel.next();
  }

  getPlantDetails() {
    this.plantService.plantsGetRequest(this.plantcommentsUrl).subscribe( (res: PlantCommentsObj) => {
      console.log("commments ");
      console.log(res);
      this.plantCommentsObj = res;
      console.log("commments obj ");
      console.log(this.plantCommentsObj);

    },
    error => {
      console.log(error);
    })
  }

}
