import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orderData: any;
  orderURL: string;
  constructor(private http: HttpClient) {
    this.orderURL = './assets/userOrderData.json'; // url bta3 el data
    // this.orderURL = 'http://192.168.137.130:9999/api/client/orders/112';
  }
  // domain
  // userId

  // urlString = domain + "/orders/" + userId;
  // 192.168.45.68/orders/1

  initiateOrderRequest(): Observable<any> {
    return this.http.get(this.orderURL);
  }
}
