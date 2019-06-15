import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-orders-view-page',
  templateUrl: './orders-view-page.component.html',
  styleUrls: ['./orders-view-page.component.scss']
})
export class OrdersViewPageComponent implements OnInit {
  ordersData: any;
  userRole : number;
  constructor(private orderService: OrderServiceService, private userService: UserService) {
    this.userRole = userService.returnAuthUserData().role;
    if(this.userRole==1){
      orderService.initiateUserOrderRequest().subscribe((inputOrderData) =>{
        // this.ordersData = inputOrderData.orders;
        this.ordersData = inputOrderData;
        console.log('Got the data', this.ordersData);
      });
    } else{
      orderService.initiatePlantationOrderRequest().subscribe((inputOrderData) =>{
        // this.ordersData = inputOrderData.orders;
        this.ordersData = inputOrderData;
        console.log('Got the data', this.ordersData);
      });
    }

  }

  ngOnInit() {
  }

}
