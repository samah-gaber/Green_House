import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';
import { BlockAnonUserModalComponent } from '../block-anon-user-modal/block-anon-user-modal.component';
import { DomainService } from '../services/domain.service';
import { PlantService } from '../services/plant.service';
import { UserFavPlantsService } from '../services/user-fav-plants.service';
// import { UserFavPlantsArrService } from '../services/user-fav-plants-arr.service';
import { SingleQuestionComponent } from '../plant-details-page-module/single-question/single-question.component'

import { OrderPlantModalComponent } from '../plant-details-page-module/order-plant-modal/order-plant-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { UserDataOrderModalComponent } from '../cart/user-data-order-modal/user-data-order-modal.component';
import { OrderConfirmModalComponent } from '../cart/order-confirm-modal/order-confirm-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SingleQuestionComponent,
    FooterComponent,
    LoadingScreenComponent,
    BlockAnonUserModalComponent,

    OrderPlantModalComponent,
    UserDataOrderModalComponent,
    OrderConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    SingleQuestionComponent,
    LoadingScreenComponent,
    BlockAnonUserModalComponent,
    FormsModule,
    ReactiveFormsModule,
    OrderPlantModalComponent,
    UserDataOrderModalComponent,
    OrderConfirmModalComponent,
    CommonModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthService,
    DomainService,
    PlantService,
    UserFavPlantsService,
    CartService
  ]
})
export class SharedModule { }
