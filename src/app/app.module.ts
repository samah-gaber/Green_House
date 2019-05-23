import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantationOrderSingleCardComponent } from './plantation-order-single-card/plantation-order-single-card.component';
import { PlantationOrderCardsComponent } from './plantation-order-cards/plantation-order-cards.component';
import { PlantDetailsPageComponent } from './plant-details-page/plant-details-page.component';
import { PlantationCommentsCarouselComponent } from './plantation-comments-carousel/plantation-comments-carousel.component';
import { PlantationSingleCommentComponent } from './plantation-single-comment/plantation-single-comment.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { PlantDetailsQuestionsComponent } from './plant-details-questions/plant-details-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailsComponent,
    PlantationOrderSingleCardComponent,
    PlantationOrderCardsComponent,
    PlantDetailsPageComponent,
    PlantationCommentsCarouselComponent,
    PlantationSingleCommentComponent,
    SingleQuestionComponent,
    PlantDetailsQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
