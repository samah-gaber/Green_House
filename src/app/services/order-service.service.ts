import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orderData: any;
  orderURL: string;
  constructor(
    private http: HttpClient,
    private httpService: HttpServiceService
  ) {
    // this.orderURL = './assets/userOrderData.json'; // url bta3 el data
    this.orderURL = 'client/orders';
  }
  // domain
  // userId

  // urlString = domain + "/orders/" + userId;
  // 192.168.45.68/orders/1

  // initiateOrderRequest(): Observable<any> {
  initiateUserOrderRequest() {
    // return this.http.get(this.orderURL);
    return this.httpService.getRequest(this.orderURL);
  }

  initiatePlantationOrderRequest() {
    // return this.http.get(this.orderURL);
    return this.httpService.getRequest("./assets/plantationOrders.json");
    //return this.httpService.getRequest(this.orderURL);
  }
}
