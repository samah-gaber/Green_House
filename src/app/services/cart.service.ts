import { Injectable } from '@angular/core';
import { CartOrders, CartOrdersAdjustedObj, CartOrdersSentObj, UserOrdersSentObj } from '../interfaces/order-interface';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DomainService } from './domain.service';
import { UserService } from './user.service';
import { HttpServiceService } from './http-service.service';

@Injectable()

export class CartService {

  totalCartCount: number;
  urlDomain = this.domain.getDomain();
  urlSendOrder = `client/insertorder`;
  urlOrderForm = `plants/orderdata`;
  userToken;
  headers;

  

  private cartSubject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private domain: DomainService,
    private userService: UserService,
    private httpService: HttpServiceService
  ) {
    // setting cart count
    if(this.getStoredCartCount()) {
      this.totalCartCount = this.getStoredCartCount();
    } else {
      this.totalCartCount = 0;
    }

    // setting http requests headers
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`,
      'Content-Type': 'application/json'
    });

    // getting user token
    if(this.userService.returnAuthUserData()) {
      this.userToken = this.userService.returnAuthUserData().token;
    };
    
   }

  increaseCartCount() {
    this.totalCartCount = this.setCartCountInLocalStorage('increase');
    this.cartSubject.next(this.totalCartCount);
  }
  
  decreaseCartCount() {
    this.totalCartCount = this.setCartCountInLocalStorage('decrease');
    this.cartSubject.next(this.totalCartCount);
  }
  
  setCartCountToZero() {
    this.totalCartCount = this.setCartCountInLocalStorage('zero');;
    this.cartSubject.next(this.totalCartCount);
  }

  getCartCount(): Observable<any> {
    return this.cartSubject.asObservable();
  }

  // saving cart count in local storage
  setCartCountInLocalStorage(indicator){
    let storedCartCount: number = 1;
    if(localStorage.getItem('cartCount')) {
      storedCartCount = +localStorage.getItem('cartCount');
      if(indicator == 'increase') {
        storedCartCount += 1;
      } else if(indicator == 'decrease' && storedCartCount > 0) {
        storedCartCount -= 1;
      } else if(indicator == 'zero') {
        storedCartCount = 0;
      }
    }
    localStorage.setItem( 'cartCount', JSON.stringify(storedCartCount) );
    return storedCartCount;
  }

  // return cart count from local storage
  getStoredCartCount() {
    if(localStorage.getItem('cartCount')) {
      return ( +localStorage.getItem('cartCount') );
    }
  }

  // restructuring orders obj
  adjustOrdersObj(ordersArr) {
    let finalOrdersArr: CartOrdersAdjustedObj[] = [];
    let orderDate = this.getCurrentDate();
    let orderInserted = false;

    // adding first order
    this.addNewPlantationOrder(finalOrdersArr, ordersArr[0], orderDate);

    // adding rest of items
    for(let i = 1; i < ordersArr.length; i++) {
      orderInserted = false;
      finalOrdersArr.forEach(element => {
        if(!orderInserted) {
          if(ordersArr[i].plantation_id == element.plantationId) {
            this.addNewPlantToPlantationOrder(element, ordersArr[i]);
            orderInserted = true;
          }
        }
      });
       if(!orderInserted) {
          this.addNewPlantationOrder(finalOrdersArr, ordersArr[i], orderDate);
       }
    }

    let finalSentOrdersObj: CartOrdersSentObj = {
      orders: finalOrdersArr
    }
    console.log(finalSentOrdersObj);
    return finalSentOrdersObj;
    
  }

  // adding order with different plantation to the orders obj
  addNewPlantationOrder(finalOrdersArr, oldOrderObj, orderDate) {
    finalOrdersArr.push({
      orderDate: orderDate,
      plantationId: oldOrderObj.plantation_id,
      totalOrderPrice: oldOrderObj.totalprice,
      items: [
        {
          plantId: oldOrderObj.plantid,
          totalPlantPrice: oldOrderObj.totalprice,
          itemContents: oldOrderObj.itemContents
        }
      ]
    });
  }

  // adding extra plant to the same plantation order
  addNewPlantToPlantationOrder(plantationObj, oldOrderObj) {
    plantationObj.items.push({
      plantId: oldOrderObj.plantid,
      totalPlantPrice: oldOrderObj.totalprice,
      itemContents: oldOrderObj.itemContents
    });
    plantationObj.totalOrderPrice += oldOrderObj.totalprice;
  }

  getCurrentDate() {
    let initialOrderDate = new Date();
    let orderDate = formatDate(initialOrderDate, 'dd-MM-yyyy', 'en-US');
    return orderDate;
  }

  // send order http request
  sendOrder(userOrdersSentObj: UserOrdersSentObj) {
    // return this.http.post( this.urlSendOrder,  userOrdersSentObj, {
    //   'headers': this.headers
    // });
    return this.httpService.postRequest(this.urlSendOrder, userOrdersSentObj);
  }

  // order form http request
  orderFormDataGetRequest(plantationPlantObj) {
    // return this.http.get(this.urlOrderForm, plantationPlantObj);
    return this.httpService.postRequest(this.urlOrderForm, plantationPlantObj);
  }

  emptyCart() {
    for( let i = 0; i<localStorage.length; i++ ) {
      if( localStorage.key(i).startsWith('CI_')) {
        localStorage.removeItem( localStorage.key(i) );
      }
    }
    let emptyCart = true;
    return emptyCart;
  }

}
