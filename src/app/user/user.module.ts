import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserFavPageComponent } from './user-fav-page/user-fav-page.component';
import { AuthGuard } from '../services/auth-guard.service';
import { UserFavSingleCardComponent } from './user-fav-single-card/user-fav-single-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserPagesComponent } from './user-pages/user-pages.component';


const routes: Routes = [
  {
    path: '', component:  UserPagesComponent, children: [
      {
        path: 'favourites', component: UserFavPageComponent
        // path: 'favourites', component: UserFavPageComponent, canActivate: [ AuthGuard ]
      }
    ]
  }
  // {
  //   path: 'orders', component:  
  // },
  // {
  //   path: 'question', component: 
  // },

];

@NgModule({
  declarations: [UserFavPageComponent, UserFavSingleCardComponent, UserPagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
