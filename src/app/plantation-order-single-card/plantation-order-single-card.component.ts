import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plantation-order-single-card',
  templateUrl: './plantation-order-single-card.component.html',
  styleUrls: ['./plantation-order-single-card.component.scss']
})
export class PlantationOrderSingleCardComponent implements OnInit {

  @Input() plantationCard;
  constructor() { }

  ngOnInit() {
  }

}
