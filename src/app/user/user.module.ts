import { OrdersViewPageComponent } from './../orders-view-page/orders-view-page.component';
import { SingleOrderCardComponent } from '../single-order-card/single-order-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserFavPageComponent } from './user-fav-page/user-fav-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../services/auth-guard.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { QuestionsPageComponent } from '../questions-page/questions-page.component';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';


const routes: Routes = [
  {
    path: '', component:  UserPagesComponent, children: [
      {
        path: 'favourites', component: UserFavPageComponent,

        // path: 'favourites', component: UserFavPageComponent, canActivate: [ AuthGuard ]
      },
      {
        path: 'questions', component: QuestionsPageComponent
      },
      {
        path: 'orders', component: OrdersViewPageComponent
      },
      {
        path: 'cart', component: CartComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    UserFavPageComponent, 
    QuestionsPageComponent,
    UserPagesComponent, 
    OrdersViewPageComponent, 
    SingleOrderCardComponent,
    UserFavPageComponent,  
    UserPagesComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule, NgbDropdownModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
