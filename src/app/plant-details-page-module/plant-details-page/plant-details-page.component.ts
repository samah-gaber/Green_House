import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-plant-details-page',
  templateUrl: './plant-details-page.component.html',
  styleUrls: ['./plant-details-page.component.scss']
})
export class PlantDetailsPageComponent implements OnInit {
  id: string;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams
    // .filter( params => params.id)
    .subscribe( params => {
      this.id = params.id;
      // console.log(this.id);
    });
  }

}
