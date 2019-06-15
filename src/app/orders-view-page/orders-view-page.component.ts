import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-orders-view-page',
  templateUrl: './orders-view-page.component.html',
  styleUrls: ['./orders-view-page.component.scss']
})
export class OrdersViewPageComponent implements OnInit {
  ordersData: any;
  constructor(private orderService: OrderServiceService) {

    orderService.initiateOrderRequest().subscribe((inputOrderData) =>{
      // this.ordersData = inputOrderData.orders;
      this.ordersData = inputOrderData;
      console.log('Got the data', this.ordersData);
    });
  }

  ngOnInit() {
  }

}
