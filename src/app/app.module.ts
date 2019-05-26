import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { LandingPageCarouselsComponent } from './landing-page-carousels/landing-page-carousels.component';
import { PlantCategorySliderComponent } from './plant-category-slider/plant-category-slider.component';
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
    HeaderComponent,
    LandingPageComponent,
    LandingPageCarouselsComponent,
    PlantCategorySliderComponent,
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
