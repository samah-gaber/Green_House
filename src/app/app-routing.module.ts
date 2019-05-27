import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'plantdetails', loadChildren: './plant-details-page-module/plant-details-page.module#PlantDetailsPageModule'
  },
  {
    path: 'users', loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
