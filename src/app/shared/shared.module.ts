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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    RouterModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  providers: [
    UserService, 
    AuthGuard, 
    AuthService
  ]
})
export class SharedModule { }
