import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  styleUrls: ['./single-plant.component.scss']
})
export class SinglePlantComponent implements OnInit {

  @Input() singlePlant;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  showPlantDetails() {
    this.router.navigate(['/', 'plantdetails'], { queryParams: { id: this.singlePlant.id } });
  }

}
