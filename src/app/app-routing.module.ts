import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageModuleModule} from './landing-page/landing-page-module.module';
import { PlantDetailsPageModule } from './plant-details-page-module/plant-details-page.module';

const routes: Routes = [
  {
    path: '', loadChildren: './landing-page/landing-page-module.module#LandingPageModuleModule'
  },
  {
    path: 'plantdetails', loadChildren: './plant-details-page-module/plant-details-page.module#PlantDetailsPageModule'
  },
  {
    path: 'users', loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    LandingPageModuleModule,
    PlantDetailsPageModule
  ]
})
export class AppRoutingModule { }
