import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantDetailsPageComponent } from './plant-details-page/plant-details-page.component';

const routes: Routes = [
  {
    path: 'plantdetails', component: PlantDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
