import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-orders-view-page',
  templateUrl: './orders-view-page.component.html',
  styleUrls: ['./orders-view-page.component.scss']
})
export class OrdersViewPageComponent implements OnInit {
  ordersData : any;
  constructor(private orderService : OrderServiceService) {
    this.ordersData = orderService.mockOrderData;
  }

  ngOnInit() {
  }

}
