import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


interface PlantCommentsObj {
  comments : [
    {
     Comment: string;
      PlantationName: string;
    }
  ]
}

@Component({
  selector: 'app-plantation-comments-carousel',
  templateUrl: './plantation-comments-carousel.component.html',
  styleUrls: ['./plantation-comments-carousel.component.scss']
})
export class PlantationCommentsCarouselComponent implements OnInit {

  @Input() plantId;
  plantCommentsObj: PlantCommentsObj;
  plantcommentsUrl = '';
  // plantationCommentsArr = [
  //   {
  //     name: '1مشتل البلكونة',
  //     comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
  //   },
  //   {
  //     name: '2مشتل البلكونة',
  //     comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
  //   },
  //   {
  //     name: '3مشتل البلكونة',
  //     comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
  //   },
  //   {
  //     name: '4مشتل البلكونة',
  //     comment: '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود مب أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا."'
  //   }
  // ]

  showNavigationArrows;
  showNavigationIndicators;

  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  
  constructor(
    config: NgbCarouselConfig,
    private http: HttpClient 
  ) { 
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.plantcommentsUrl = `http://192.168.137.155:9999/api/plants/comment/${this.plantId}`;
    this.getPlantDetails();
  }

  previousSlide() {
    this.myCarousel.prev();
  }
  nextSlide() {
    this.myCarousel.next();
  }

  getPlantDetails() {
    this.http.get(this.plantcommentsUrl).subscribe( (res: PlantCommentsObj) => {
     console.log('res arrived');
     console.log(res);
      this.plantCommentsObj = res;
    },
    error => {
      console.log(error);
    })
  }

}
