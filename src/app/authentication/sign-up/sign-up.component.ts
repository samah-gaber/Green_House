import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { validateConfig } from "@angular/router/src/config";
import { UserService } from "../../services/user.service";
import { UserSignedUp, AuthUserData } from "../../interfaces/user-interface";
import { Router } from "@angular/router";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  countries: string[] = ["القاهرة", "الاسكندرية"];
  userSignedUp: UserSignedUp;
  authUser: AuthUserData;

  userName: FormControl;
  userEmail: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  country: FormControl;
  gender: FormControl;
  birthDate: FormControl;

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
    this.userName = new FormControl("", Validators.required);
    this.userEmail = new FormControl("", [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.confirmPassword = new FormControl("", [
      Validators.required,
      CustomValidators.equalTo(this.password)
    ]);
    this.country = new FormControl("", Validators.required);
    this.gender = new FormControl("");
    this.birthDate = new FormControl("");
  }

  createForm() {
    this.signupForm = this.fb.group({
      userName: this.userName,
      userEmail: this.userEmail,
      password: this.password,
      confirmPassword: this.confirmPassword,
      country: this.country,
      gender: this.gender,
      birthDate: this.birthDate
    });
  }

  onSignup(signupForm) {
    let userBirthDate = formatDate(this.birthDate.value, 'dd-MM-yyyy', 'en-US');

    this.userSignedUp = {
      name: this.userName.value,
      email: this.userEmail.value,
      password: this.password.value,
      city: this.country.value,
      // birthdate: "11/11/2019",
      birthdate: userBirthDate,
      gender: this.gender.value
    };

    this.userService.submitNewUser(this.userSignedUp).subscribe(
      (res: AuthUserData) => {
        console.log("response");
        console.log(res);
        this.authUser = res;
        this.userService.setAuthUserData(this.authUser);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error);
      }
    );
  }

  goToHome() {
    this.router.navigateByUrl("/");
  }
}
