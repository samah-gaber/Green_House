import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-order-card',
  templateUrl: './single-order-card.component.html',
  styleUrls: ['./single-order-card.component.scss']
})
export class SingleOrderCardComponent implements OnInit {
  @Input() orderData;
  constructor() { }

  ngOnInit() {
  }

}
