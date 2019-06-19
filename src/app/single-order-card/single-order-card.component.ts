import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-order-card',
  templateUrl: './single-order-card.component.html',
  styleUrls: ['./single-order-card.component.scss'],
  providers: [NgbProgressbarConfig],
})
export class SingleOrderCardComponent implements OnInit {
  @Input() orderData;
  @Input() userRole;
  constructor(config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit() {
    console.log('single order card', this.orderData);
  }

}
