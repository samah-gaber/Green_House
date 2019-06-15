import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BlockAnonUserModalComponent } from './block-anon-user-modal/block-anon-user-modal.component';
import { SharedModule } from './shared/shared.module';
import { OrderPlantModalComponent } from './plant-details-page-module/order-plant-modal/order-plant-modal.component';
import { UserDataOrderModalComponent } from './cart/user-data-order-modal/user-data-order-modal.component';
import { OrderConfirmModalComponent } from './cart/order-confirm-modal/order-confirm-modal.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BlockAnonUserModalComponent,
    OrderPlantModalComponent,
    UserDataOrderModalComponent,
    OrderConfirmModalComponent
  ]
})
export class AppModule { }
