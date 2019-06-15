import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserFavPageComponent } from './user-fav-page/user-fav-page.component';
import { AuthGuard } from '../services/auth-guard.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { CartComponent } from '../cart/cart.component';


const routes: Routes = [
  {
    path: '', component:  UserPagesComponent, children: [
      {
        path: 'favourites', component: UserFavPageComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      // {
      //   path: 'orders', component:  
      // },
      // {
      //   path: 'question', component: 
      // }
    ]
  }

];

@NgModule({
  declarations: [
    UserFavPageComponent,  
    UserPagesComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
