import { Component, OnInit } from '@angular/core';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef, MDBModalService } from 'angular-bootstrap-md'
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm,
  FormControl
} from "@angular/forms";
import { validateConfig } from "@angular/router/src/config";
import { CustomValidators } from "ng2-validation";
import { UserOrdersSentObj } from '../../interfaces/order-interface';
import { CartService } from '../../services/cart.service';
import { OrderConfirmModalComponent } from '../order-confirm-modal/order-confirm-modal.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-data-order-modal',
  templateUrl: './user-data-order-modal.component.html',
  styleUrls: ['./user-data-order-modal.component.scss']
})
export class UserDataOrderModalComponent implements OnInit {

  content: any;
  userOrdersSentObj: UserOrdersSentObj;

  userOrderNo: string;

  userDataOrder: FormGroup;
  countries: string[] = ["القاهرة", "الاسكندرية"];

  userPhone: FormControl;
  userCity: FormControl;
  userAddress: FormControl;

  action = new Subject();

  constructor(
    private fb: FormBuilder,
    public modalRef: MDBModalRef,
    private modalService: MDBModalService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userPhone = new FormControl("", [
      Validators.required,
      CustomValidators.digits
    ]);
    this.userCity = new FormControl("", Validators.required);
    this.userAddress = new FormControl("", Validators.required);
  }

  createForm() {
    this.userDataOrder = this.fb.group({
      userPhone: this.userPhone,
      userCity: this.userCity,
      userAddress: this.userAddress
    });
  }

  onSubmit(form) {
    this.userOrdersSentObj = {
      userPhone: this.userPhone.value,
      userCity: this.userCity.value,
      userAddress: this.userAddress.value,
      orders: this.content.userOrdersObj.orders
    }
    console.log( this.userOrdersSentObj);

    this.cartService.sendOrder(this.userOrdersSentObj).subscribe(
      res => {
        console.log(res);
        // this.userOrderNo = res.orderNo;
      },
      error => {
        console.log(error);
      }
    );
    this.modalRef.hide();
    let emptyCart = this.cartService.emptyCart();
    this.action.next(emptyCart);
    this.modalRef = this.modalService.show(OrderConfirmModalComponent, {
      data: {
        content: {
          orderNo: '4535437657'
        }
        // content: {
          // orderNo: this.userOrderNo
        // }
      }
    });
  }

}
