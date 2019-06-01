import { Component, OnInit } from '@angular/core';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-anon-user-modal',
  templateUrl: './block-anon-user-modal.component.html',
  styleUrls: ['./block-anon-user-modal.component.scss']
})
export class BlockAnonUserModalComponent implements OnInit {
  heading: string;

  constructor( 
    public modalRef: MDBModalRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToSignIn() {
    this.router.navigateByUrl('/auth/signin');
    this.modalRef.hide();
  }
}
