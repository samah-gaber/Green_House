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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingScreenComponent,
    BlockAnonUserModalComponent
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
    LoadingScreenComponent,
    BlockAnonUserModalComponent,
    CommonModule
  ],
  providers: [
    UserService, 
    AuthGuard, 
    AuthService,
    DomainService,
    PlantService,
    UserFavPlantsService
    // UserFavPlantsArrService
  ]
})
export class SharedModule { }
