import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  NgForm
} from '@angular/forms';
import { CustomValidators } from "ng2-validation";
import { validateConfig } from "@angular/router/src/config";
import { PlantService } from '../../services/plant.service';
import { Router } from '@angular/router';
import { PlantationServiceService } from '../../services/plantation-service.service';

@Component({
  selector: 'app-plantation-home',
  templateUrl: './plantation-home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./plantation-home.component.scss']
})
export class PlantationHomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private plantationService: PlantationServiceService,
    private router: Router
  ) { }

  ngOnInit() {}

  goToAddPlantForm() {
    this.router.navigateByUrl('/addplantform');
  }

}

