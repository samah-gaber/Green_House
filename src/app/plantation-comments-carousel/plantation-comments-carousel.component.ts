import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plantation-comments-carousel',
  templateUrl: './plantation-comments-carousel.component.html',
  styleUrls: ['./plantation-comments-carousel.component.scss']
})
export class PlantationCommentsCarouselComponent implements OnInit {

  plantationCommentsArr = [
    {
      name: '1مشتل البلكونة',
      comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
    },
    {
      name: '2مشتل البلكونة',
      comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
    },
    {
      name: '3مشتل البلكونة',
      comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
    },
    {
      name: '4مشتل البلكونة',
      comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
    }
  ]

  showNavigationArrows;
  showNavigationIndicators;

  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

  previousSlide() {
    this.myCarousel.prev();
  }
  nextSlide() {
    this.myCarousel.next();
  }

}
