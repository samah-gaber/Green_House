import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SingleForumQuestionComponent } from './single-forum-question/single-forum-question.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page.component';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { LandingPageCarouselsComponent } from './landing-page-carousels/landing-page-carousels.component';
import { PlantCategorySliderComponent } from './plant-category-slider/plant-category-slider.component';
import { PlantCategoriesComponent } from './plant-categories/plant-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { AddsComponent } from './adds/adds.component';
import { SinglePlantComponent } from './single-plant/single-plant.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'forum', component: ForumPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    LandingPageComponent,
    ForumPageComponent,
    LandingPageCarouselsComponent,
    PlantCategorySliderComponent,
    PlantCategoriesComponent,
    OurClientsComponent,
    AddsComponent,
    SinglePlantComponent,
    SingleForumQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class LandingPageModuleModule { }
