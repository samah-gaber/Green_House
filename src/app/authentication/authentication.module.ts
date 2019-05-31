import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../services/user.service';


const routes: Routes = [
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'signup', component: SignUpComponent
  }
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [UserService]
})
export class AuthenticationModule { }