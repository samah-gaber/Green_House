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
// import { BlockAnonUserModalComponent } from './plant-details-page-module/block-anon-user-modal/block-anon-user-modal.component';


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
    // BlockAnonUserModalComponent
  ],
  providers: [UserService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
  // entryComponents: [
  //   BlockAnonUserModalComponent
  // ]
})
export class AppModule { }
