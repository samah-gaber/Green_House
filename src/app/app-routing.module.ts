import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantDetailsComponent } from './plant-details/plant-details.component';

const routes: Routes = [
  {
    path: 'plantdetails', component: PlantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
