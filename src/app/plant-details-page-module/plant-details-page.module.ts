import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { PlantDetailsPageComponent } from './plant-details-page/plant-details-page.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantationOrderCardsComponent } from './plantation-order-cards/plantation-order-cards.component';
import { PlantationOrderSingleCardComponent } from './plantation-order-single-card/plantation-order-single-card.component';
import { PlantationCommentsCarouselComponent } from './plantation-comments-carousel/plantation-comments-carousel.component';
import { PlantationSingleCommentComponent } from './plantation-single-comment/plantation-single-comment.component';
import { PlantDetailsQuestionsComponent } from './plant-details-questions/plant-details-questions.component';
// import { BlockAnonUserModalComponent } from './block-anon-user-modal/block-anon-user-modal.component';
const routes: Routes = [
  {
    path: '', component: PlantDetailsPageComponent
  }
];

@NgModule({
  declarations: [
    PlantDetailsPageComponent,
    PlantDetailsComponent,
    PlantationOrderCardsComponent,
    PlantationOrderSingleCardComponent,
    PlantationCommentsCarouselComponent,
    PlantationSingleCommentComponent,
    PlantDetailsQuestionsComponent,
    // BlockAnonUserModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    SharedModule
  ]
})
export class PlantDetailsPageModule { }
