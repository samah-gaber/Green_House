import { Component, OnInit, Input } from '@angular/core';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-user-fav-single-card',
  templateUrl: './user-fav-single-card.component.html',
  styleUrls: ['./user-fav-single-card.component.scss']
})
export class UserFavSingleCardComponent implements OnInit {

  @Input() favPlant; 

  constructor() { }

  ngOnInit() {
  }

  removeFromFav() {
    console.log('removed');
  }

}
