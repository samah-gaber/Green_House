import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { UserSignedIn } from '../../interfaces/user-interface';

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})

export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  userSignedIn: UserSignedIn;

  userEmail: FormControl;
  password: FormControl;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
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
      email: this.userEmail.value,
      password: this.password.value
    };

    this.userService.logInUser(this.userSignedIn);
  }

}
