import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule, DropdownModule } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AuthUserData } from '../interfaces/user-interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { NotificationsService } from '../services/notifications.service';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchBarForm: FormGroup;
  showUserName: boolean = false;
  userData: AuthUserData;
  totalCartCount: number;

  // notifications service
  notificationMsgs: any[];


  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder,
    private cartService: CartService,
    private httpService: HttpServiceService,
    // notifications service
    // public notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    localStorage.setItem('authUserData', JSON.stringify({
      id: 1,
      userName: 'ali',
      token: 'ffhbgfg43434',
      role:1
    }))
    this.checkUserAuthenticated();

    this.searchBarForm = this.fb.group ({
      seachBar: ''
    })

    this.totalCartCount = this.getCartCount();

    this.cartService.getCartCount().subscribe( cartCount => {
      this.totalCartCount = cartCount;
    })

    // notifications service
    // this.notificationsService.msgService();

  }

  onSignIn() {
    this.router.navigateByUrl('/auth/signin');
  }

  checkUserAuthenticated() {
    console.log('this.authService.isAuthenticated()', this.authService.isAuthenticated());
    console.log(this.userData);
    if( this.authService.isAuthenticated() ) {
      this.showUserName = true;
      this.userData = this.userService.returnAuthUserData();
      console.log("User is authenticated", this.userData);
      console.log("User is authenticated role", this.userData.role);
    }
  }

  goToCart() {
    this.router.navigateByUrl('/user/cart');
  }

  getCartCount() {
    let cartCount: number = 0;
    if(this.cartService.getStoredCartCount()) {
      cartCount = this.cartService.getStoredCartCount();
    }
    return cartCount;
    // let ordersArr = [];
    // for( let i = 0; i<localStorage.length; i++ ) {
    //   if( localStorage.key(i).startsWith('CI_') ) {
    //     ordersArr.push( localStorage.key(i) );
    //   }
    // }
    // return ordersArr.length;
  }

  onSignOut() {
    this.userService.logOutUser().subscribe(
      res => {

        console.log('signput response');
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
    this.userService.deleteAuthUserData();
    this.showUserName = false;
    this.router.navigateByUrl('/');
  }

  // getNotifications() {
  //   let url = `notification/allnotification/${this.userData.userId}`;
  //   this.httpService.getRequest(url).subscribe(
  //     res => {
  //       console.log(res);
  //     }
  //   )
  // }

}
