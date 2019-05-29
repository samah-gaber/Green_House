import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {

  @Input() plantId;
  plantDetailsObj: {};

  plantDetailsUrl = `https://reqres.in/api/users/${this.plantId}`;
  constructor( private http: HttpClient ) { }

  // dummy obj
  plantDetails = {
    id: 1,
    name: 'روزمارى',
    category: 'روزمارى',
    soil: 'روزمارى',
    steps: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دأيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوتانيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولا ماجنا أليكيوا',
    humidity: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دأيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوتانيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ',
    season: 'روزمارى'
  }

  ngOnInit() {
    // this.getPlantDetails();
  }

  getPlantDetails() {
    this.http.get(this.plantDetailsUrl).subscribe( res => {
      this.plantDetailsObj = res;
    },
    error => {
      console.log(error);
    })
  }

}
