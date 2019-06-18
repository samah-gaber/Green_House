import { Component, OnInit } from '@angular/core';
import { CartOrders } from '../interfaces/order-interface';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { AuthService } from '../services/auth.service';
import { BlockAnonUserModalComponent } from '../block-anon-user-modal/block-anon-user-modal.component';
import { CartService } from '../services/cart.service';
import { UserDataOrderModalComponent } from './user-data-order-modal/user-data-order-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  modalRef: MDBModalRef;
  ordersArr: CartOrders[] = [];
  cartTotalPrice: number = 0;
  emptyCart: boolean;

  constructor(
    private router: Router,
    private modalService: MDBModalService,
    private authUser: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getStoredOrders();
    this.emptyCart = true;
  }

  getStoredOrders() {
    for (let i = 0; i<localStorage.length; i++) {
      if(localStorage.key(i).startsWith('CI_')) {
        let restoredItem = JSON.parse( localStorage.getItem( localStorage.key(i) ) );
        this.ordersArr.push( restoredItem );
        this.emptyCart = false;
      }
    }
    this.calcCartTotalPrice();
  }

  calcCartTotalPrice() {
    let totalSum: number = 0;
    this.ordersArr.forEach(elt => {
      totalSum += elt.totalprice;
    });
    this.cartTotalPrice = totalSum;
  }

  updatePrices(event,order,item) {
    let newQty = event.target.value;
    let newOrderTotal = 0;
    item.quantity = newQty;
    item.totalPrice = item.price*newQty;
    order.itemContents.forEach(elt => {
      newOrderTotal += elt.totalPrice;
    });
    order.totalprice = newOrderTotal;
    this.calcCartTotalPrice();

    newOrderTotal = 0;
    let storedItemKey = `CI_${order.plantation_id}_${order.plantid}`;
    let storedItem = JSON.parse( localStorage.getItem(storedItemKey) );
    storedItem.itemContents.forEach(elt => {
      if(item.type == elt.type) {
        elt.quantity = newQty;
        elt.totalPrice = elt.price * newQty;
      }
      newOrderTotal += elt.totalPrice;
    });
    storedItem.totalprice = newOrderTotal;
    localStorage.setItem( storedItemKey, JSON.stringify(storedItem) );

  }

  deleteOrder(order) {
    let decreaseCartCount = true;
    this.ordersArr.forEach( (elt, index) => {
      if(elt == order) {
        this.ordersArr.splice(index, 1);
      }
    });
    let storedItemKey = `CI_${order.plantation_id}_${order.plantid}`;
    localStorage.removeItem(storedItemKey);
    this.cartService.decreaseCartCount();
    this.calcCartTotalPrice();
  }

  backHome() {
    this.router.navigateByUrl('/');
  }

  checkout() {
    if(this.authUser.isAuthenticated()) {
      this.emptyCart = false;
      let finalSentOrdersObj = this.cartService.adjustOrdersObj(this.ordersArr);
      console.log('finalSentOrdersObj', finalSentOrdersObj);
      this.modalRef = this.modalService.show(UserDataOrderModalComponent, {
        data: {
          content: {
            userOrdersObj: finalSentOrdersObj
          }
        }
      });
      this.modalRef.content.action.subscribe(
        res => {
          this.emptyCart = res;
          if(this.emptyCart) {
            this.ordersArr = [];
            this.cartTotalPrice = 0;
            this.cartService.setCartCountToZero();
          }
        }
      )
    } else {
      this.modalRef = this.modalService.show(BlockAnonUserModalComponent, { data: {
            heading: 'هل تريد الاستمرار ف عملية الشراء؟',
            }
          });
    }
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

}
