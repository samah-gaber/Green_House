import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserFavPlantsService } from '../../services/user-fav-plants.service';
import { UserService } from '../../services/user.service';
import { BlockAnonUserModalComponent } from '../../block-anon-user-modal/block-anon-user-modal.component';
import { UserFavPlant } from '../../interfaces/plant-interface';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlantationServiceService } from 'src/app/services/plantation-service.service';

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
    private fb: FormBuilder,
    private plantationService: PlantationServiceService
  ) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  showPlantDetails() {
    this.router.navigate(['/', 'plantdetails'], { queryParams: { id: this.singlePlant.id, 'name': this.singlePlant.name } });
  }

  openBackDropCustomClass(content) {
    this.ngbModalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  toggleFav(event) {
    debugger;
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

  createFormControls() {
    this.plantNewComment = new FormControl('');
  }

  createForm() {
    this.plantCommentForm = this.fb.group({
      plantComment: this.plantNewComment,
    });
  }

  submitPlantComment(param){
    const submittedComment = param.controls.plantComment.value;
    this.plantationService.sendFormData(submittedComment).subscribe((res) =>{
      console.log("Comment submitted");
    });
    this.ngbModalService.dismissAll();
  }

  deletePlant(){
    this.plantationService.deleteData(this.singlePlant.id).subscribe((res)=>{
      console.log("Delete request executed " , res);
    });
    this.ngbModalService.dismissAll();
  }
}
