import { Component, OnInit, Input } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { AuthService } from '../../services/auth.service';
// import { BlockAnonUserModalComponent } from '../../block-anon-user-modal/block-anon-user-modal.component';
import { OrderPlantModalComponent } from '../order-plant-modal/order-plant-modal.component';

@Component({
  selector: 'app-plantation-order-single-card',
  templateUrl: './plantation-order-single-card.component.html',
  styleUrls: ['./plantation-order-single-card.component.scss']
})
export class PlantationOrderSingleCardComponent implements OnInit {
 
  modalRef: MDBModalRef;
  @Input() plantationCard;
  @Input() plantId;
  @Input() plantName;
  constructor( 
    private modalService: MDBModalService,
    private authUser: AuthService
  ) { }
  
  ngOnInit() {
  }


  orderPlant() {
    // if(this.authUser.isAuthenticated()) {
      this.modalRef = this.modalService.show(OrderPlantModalComponent, { 
        data: {
          content: {
            plantId: this.plantId,
            plantName: this.plantName,
            plantationId: this.plantationCard.plantationId,
            plantationName: this.plantationCard.plantationName
          }
      }
    });
    // } 
    // else {
    //   this.modalRef = this.modalService.show(BlockAnonUserModalComponent, { data: {
    //     heading: 'هل تريد شراء هذا النبات ؟',
    //     }
    //   });
    // }
  }

}
