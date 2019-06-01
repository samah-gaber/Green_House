import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserFavPageComponent } from './user-fav-page/user-fav-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../services/auth-guard.service';
import { UserFavSingleCardComponent } from './user-fav-single-card/user-fav-single-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { QuestionsPageComponent } from '../questions-page/questions-page.component';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '', component:  UserPagesComponent, children: [
      {
        path: 'favourites', component: UserFavPageComponent,

        // path: 'favourites', component: UserFavPageComponent, canActivate: [ AuthGuard ]
      },
      {
        path: 'questions', component: QuestionsPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UserFavPageComponent, QuestionsPageComponent,
    UserFavSingleCardComponent, UserPagesComponent],
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
