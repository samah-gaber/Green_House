import { Component, OnInit } from '@angular/core';

interface PlantationPlantData {
  'id': number;
  'name': string;
  'plantPrice': number;
}

@Component({
  selector: 'app-plantation-order-cards',
  templateUrl: './plantation-order-cards.component.html',
  styleUrls: ['./plantation-order-cards.component.scss']
})

export class PlantationOrderCardsComponent implements OnInit {

  plantationsArr: PlantationPlantData[] = [
    {
      'id': 1,
      'name':'مشتل البلكونة',
      'plantPrice': 7
    },
    {
      'id': 2,
      'name': 'مشتل البلكونة',
      'plantPrice': 7
    },
    {
      'id': 3,
      'name': 'مشتل البلكونة',
      'plantPrice': 7
    },
    {
      'id': 4,
      'name': 'مشتل البلكونة',
      'plantPrice': 7
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
