import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { LandingPageModuleModule } from './landing-page/landing-page-module.module';

const routes: Routes = [
  {
    path: '', component: MainModule, children: [
      {
        path: '', component: LandingPageModuleModule
      },
      {
        path: 'plantdetails', loadChildren: './plant-details-page-module/plant-details-page.module#PlantDetailsPageModule'
      }
    ]
  },
  {
    path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [
    MainModule,
    LandingPageModuleModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
