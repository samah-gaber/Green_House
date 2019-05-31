import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', loadChildren: '../landing-page/landing-page-module.module#LandingPageModuleModule'
  },
  {
    path: 'plantdetails', loadChildren: '../plant-details-page-module/plant-details-page.module#PlantDetailsPageModule' 
  },
  {
    path: 'user', loadChildren: '../user/user.module#UserModule', redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
