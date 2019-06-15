import { Component, OnInit } from '@angular/core';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef } from 'angular-bootstrap-md'

@Component({
  selector: 'app-order-confirm-modal',
  templateUrl: './order-confirm-modal.component.html',
  styleUrls: ['./order-confirm-modal.component.scss']
})
export class OrderConfirmModalComponent implements OnInit {

  content: any;
  userOrderNo: string;

  constructor(
    public modalRef: MDBModalRef
  ) { }

  ngOnInit() {
    this.userOrderNo = this.content.orderNo;
  }

}
