import { Component, OnInit, Input } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { AuthService } from '../../services/auth.service';
import { BlockAnonUserModalComponent } from '../../block-anon-user-modal/block-anon-user-modal.component';

@Component({
  selector: 'app-plantation-order-single-card',
  templateUrl: './plantation-order-single-card.component.html',
  styleUrls: ['./plantation-order-single-card.component.scss']
})
export class PlantationOrderSingleCardComponent implements OnInit {
 
  modalRef: MDBModalRef;
  @Input() plantationCard;
  constructor( 
    private modalService: MDBModalService,
    private authUser: AuthService
  ) { }
  
  ngOnInit() {
  }


  addToCart() {
    if(this.authUser.isAuthenticated()) {
      console.log("user logged in");
    } 
    else {
      this.modalRef = this.modalService.show(BlockAnonUserModalComponent, { data: {
        heading: 'هل تريد شراء هذا النبات ؟',
        }
      });
    }
  }

}
