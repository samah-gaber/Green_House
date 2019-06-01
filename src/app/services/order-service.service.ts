import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  mockOrderData: any;
  constructor() {
    this.mockOrderData = [
      {
        orderId: 1,
        totalPrice: 12,
        orderDate: Date.now(),
        orderAddres: "Smouha",
        items: [
          {
            plantId: 1,
            plantImg: "",
            plantCategory: "Plant",
            plantName: "RoseMary",
            plantationName: "balcona",
            totalPrice: 40, //sum of item contents
            itemContents: [
              {
                quantity: 2,
                typeOfQuantity: "kg",
                typeOfUnit: "semad",
                unitPrice: 10,
                totalPrice: 20,

              },
              {
                quantity: 2,
                typeOfQuantity: "3adad",
                typeOfUnit: "shatla",
                unitPrice: 10,
                totalPrice: 20,
              }
            ]
          },
          {
            plantId: 2,
            plantImg: "",
            plantCategory : "Plant",
            plantName: "Mushroom",
            plantationName: "balcona",
            totalPrice: 40, //sum of item contents
              itemContents: [
              {
                quantity: 2,
                typeOfQuantity: "3adad",
                typeOfUnit: "shatla",
                unitPrice: 10,
                totalPrice: 20,
              }
            ]
          },
        ]
      }
    ]
  }
}
