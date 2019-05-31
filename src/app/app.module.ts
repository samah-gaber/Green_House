import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockAnonUserModalComponent } from './block-anon-user-modal/block-anon-user-modal.component';
import { SharedModule } from './shared/shared.module';
import { QuestionsPageComponent } from './questions-page/questions-page.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BlockAnonUserModalComponent
  ]
})
export class AppModule { }
