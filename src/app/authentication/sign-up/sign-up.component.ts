import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm,
  FormControl
} from "@angular/forms";
import { CustomValidators } from 'ng2-validation';
import { validateConfig } from "@angular/router/src/config";
import { UserService } from '../../services/user.service';
import { UserSignedUp } from '../../interfaces/user-interface';


@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  countries: string[] = ["القاهرة", "الاسكندرية"];
  userSignedUp: UserSignedUp;

  userName: FormControl;
  userEmail: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  country: FormControl;
  gender: FormControl;
  birthDate: FormControl;


  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // this.signupForm = this.fb.group({
    //   userName: new FormControl('', Validators.required),
    //   userEmail: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    //   confirmPassword: new FormControl('', [Validators.required, CustomValidators.equalTo(password)]),
    //   country: new FormControl('', Validators.required),
    //   gender: new FormControl('', Validators.required)
    // });

  }

  

  // resetForm(form?: NgForm) {
  //   if (form != null) form.reset();
  //   this.user = {
  //     userName: "",
  //     password: "",
  //     email: "",
  //     city: "",
  //     birthDate: ""
  //   };
  // }

  // checkConfirmPasswordMatch() {
  //   if(this.password !=null  && this.confirmPassword !=null){
  //     if (this.password.value !== this.confirmPassword.value) {
  //       // console.log('matching');
  //       return { notMatching: true };
  //     } else {
  //       // console.log('not matching');
  //       return  null;
  //     }
  //   }
    
  // }

  createFormControls() {
   
    this.userName= new FormControl('', Validators.required);
    this.userEmail= new FormControl('', [Validators.required, Validators.email]);
    this.password= new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]);
    this.confirmPassword= new FormControl('', [Validators.required, CustomValidators.equalTo(this.password)]);
    this.country= new FormControl('', Validators.required);
    this.gender= new FormControl('');
    this.birthDate= new FormControl('');

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
    this.userSignedUp = {
      userName: this.userEmail.value,
      email: this.userEmail.value,
      password: this.password.value,
      city: this.country.value,
      birthDate: this.birthDate.value,
      gender: this.gender.value
    };

    this.userService.submitNewUser(this.userSignedUp);

  }
}
