import { Component, OnInit, Input } from '@angular/core';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { UserService } from '../../services/user.service';
import { UserFavPlant } from '../../interfaces/user-interface';

@Component({
  selector: 'app-user-fav-single-card',
  templateUrl: './user-fav-single-card.component.html',
  styleUrls: ['./user-fav-single-card.component.scss']
})
export class UserFavSingleCardComponent implements OnInit {

  @Input() favPlant; 
  userFavPlantData: UserFavPlant;

  constructor( 
    private userFavPlantService: UserFavPlantsService,
  private userService: UserService ) { }

  ngOnInit() {
  }

  removeFromFav(event) {
    // console.log(event.target.parentElement);
    const userId = this.userService.returnAuthUserData().userId;
      this.userFavPlantData = {
        user_id : userId,
        plant_id: this.favPlant.id
      }
    this.userFavPlantService.removeFromFav(this.userFavPlantData).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
    event.target.parentElement.style.display='none';
  }

}
