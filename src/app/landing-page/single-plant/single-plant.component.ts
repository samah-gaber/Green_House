import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { UserService } from '../../services/user.service';
import { BlockAnonUserModalComponent } from '../../block-anon-user-modal/block-anon-user-modal.component';
import { UserFavPlant } from '../../interfaces/user-interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./single-plant.component.scss']
})
export class SinglePlantComponent implements OnInit {
  modalRef: MDBModalRef;
  @Input() singlePlant;
  @Input() userRole : number;
  userFavPlantData: UserFavPlant;
  plantCommentForm: FormGroup;
  plantNewComment : FormControl;

  constructor(
    private router: Router,
    private modalService: MDBModalService,
    private ngbModalService: NgbModal,
    private authUser: AuthService,
    private userFavPlantService: UserFavPlantsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  showPlantDetails() {
    this.router.navigate(['/', 'plantdetails'], { queryParams: { id: this.singlePlant.id } });
  }

  openBackDropCustomClass(content) {
    this.ngbModalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  toggleFav(event) {
    if(this.authUser.isAuthenticated()) {
      const userId = this.userService.returnAuthUserData().userId;
      this.userFavPlantData = {
        user_id : userId,
        plant_id: this.singlePlant.id
      }

      // check fav class
      let iconClassList = event.target.getAttribute('class');
      if (iconClassList.search('fav') == -1) {
        this.userFavPlantService.addToFav(this.userFavPlantData).subscribe(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        )
        event.target.classList.add('fav');
      } else {
        this.userFavPlantService.removeFromFav(this.userFavPlantData).subscribe(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        )
        event.target.classList.remove('fav');
      }
    }
    else {
      this.modalRef = this.modalService.show(BlockAnonUserModalComponent, { data: {
        heading: 'هل تريد إضافة النبات إلى نباتاتك المفضلة ؟',
        }
      });
    }
  }

  createFormControls() {
    this.plantNewComment = new FormControl('');
  }

  createForm() {
    this.plantCommentForm = this.fb.group({
      plantComment: this.plantNewComment,
    });
  }

  handleSend(param){
    this.ngbModalService.dismissAll();
  }

  deletePlant(){
    console.log("deleting plant with id", this.singlePlant);
    this.ngbModalService.dismissAll();
  }
}
