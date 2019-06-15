import { Component, OnInit, Input } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { UserService } from '../../services/user.service';
import { BlockAnonUserModalComponent } from '../../block-anon-user-modal/block-anon-user-modal.component';
import { UserFavPlant } from '../../interfaces/plant-interface';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  styleUrls: ['./single-plant.component.scss']
})
export class SinglePlantComponent implements OnInit {
  modalRef: MDBModalRef;  
  @Input() singlePlant;
  userFavPlantData: UserFavPlant;

  constructor( 
    private router: Router,
    private modalService: MDBModalService,
    private authUser: AuthService,
    private userFavPlantService: UserFavPlantsService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  showPlantDetails() {
    this.router.navigate(['/', 'plantdetails'], { queryParams: { id: this.singlePlant.id, 'name': this.singlePlant.name } });
  }

  toggleFav(event) {
    if(this.authUser.isAuthenticated()) {
      // const userId = this.userService.returnAuthUserData().userId;
      // this.userFavPlantData = {
      //   user_id : userId,
      //   plant_id: this.singlePlant.id
      // }

      // check fav class 
      let iconClassList = event.target.getAttribute('class');
      if (iconClassList.search('fav') == -1) {
        this.userFavPlantService.addToFav(this.singlePlant.id).subscribe(
          res => {
            console.log('res fav');
            console.log(res);
            event.target.classList.add('fav');
          },
          error => {
            console.log(error);
          }
        )
      } else {      
        this.userFavPlantService.removeFromFav(this.singlePlant.id).subscribe(
          res => {
            console.log(res);
            event.target.classList.remove('fav');
          },
          error => {
            console.log(error);
          }
        )
      }
    } 
    else {
      this.modalRef = this.modalService.show(BlockAnonUserModalComponent, { data: {
        heading: 'هل تريد إضافة النبات إلى نباتاتك المفضلة ؟',
        }
      });
    }
  }
}
