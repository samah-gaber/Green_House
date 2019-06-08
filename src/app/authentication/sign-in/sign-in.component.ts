import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { UserSignedIn, AuthUserData } from '../../interfaces/user-interface';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})

export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  userSignedIn: UserSignedIn;
  authUser: AuthUserData;

  userEmail: FormControl;
  password: FormControl;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    
  }

  createFormControls() {
    this.userEmail= new FormControl('', [Validators.required, Validators.email]);
    this.password= new FormControl('',[
      Validators.required
    ]);
  }

  createForm() {
    this.signinForm = this.fb.group({
      userEmail: this.userEmail,
      password: this.password
  });
  }

  onSignin(form) {
    this.userSignedIn = {
      UserName: this.userEmail.value,
      Password: this.password.value
    };

    this.userService.logInUser(this.userSignedIn).subscribe(
      (res: AuthUserData) => {
        this.authUser = res;
        this.userService.setAuthUserData(this.authUser);
        this.router.navigateByUrl('/');
      }
    )
  }

}


// ErrorStateMatcher@samah.samah
// samah1
