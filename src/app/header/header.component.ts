import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.router.navigateByUrl('/users/signin');
  }

}
