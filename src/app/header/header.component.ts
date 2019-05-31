import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule, DropdownModule } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AuthUserData } from '../interfaces/user-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showUserName: boolean = false;
  userData: AuthUserData;
  constructor( 
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.checkUserAuthenticated();
  }

  onSignIn() {
    this.router.navigateByUrl('/users/signin');
  }

  checkUserAuthenticated() {
    if( this.authService.isAuthenticated() ) {
      this.showUserName = true;
      this.userData = this.userService.returnAuthUserData();
    }
  }

  navToQuestions() {
    this.router.navigate(['/user/questions'], { queryParams: { userId: this.userData.id } })
  }

}
