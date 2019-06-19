// user orders history
export interface UserOrdersHistory {
    orders: [
        {
            orderid: number;
            orderdate: string;
            plantation_id: number;
            plantation_name: string;
            totalprice: number;
            flag: boolean;
            items: [
                {
                    plantid: number;
                    plantname: string;
                    plantimg: string;
                    itemContents: [
                        {
                            type: string;
                            quantity: number;
                        }
                    ]
                }
            ]
        }
    ]
}

// user single order
// export interface UserSingleOrder {
//     orderdate: string;
//     plantation_id: number;
//     plantation_name: string;
//     totalprice: number;
//     // flag: boolean;
//     items: [
//         {
//             plantid: number;
//             plantname: string;
//             plantimg: string;
//             itemContents: [
//                 {
//                     type: string;
//                     quantity: number;
//                 }
//             ]
//         }
//     ]
// }

// user orders cart
export interface CartOrders {
    plantation_id: number;
    plantation_name: string;
    totalprice: number
    plantid: number;
    plantname: string;
    plantimg: string;
    itemContents: [
        {
            type: string;
            arType: string;
            price: number;
            quantity: number;
            totalPrice: number;
        }
    ]
}

// user orders cart adjusted OBJ
export interface CartOrdersAdjustedObj {
    orderDate: string;
    plantationId: number;
    totalOrderPrice: number
    items: [
        {
            plantId: number;
            totalPlantPrice: number;
            itemContents: [
                {
                    type: string;
                    quantity: number;
                    totalTypePrice: number;
                }
            ]
        }
    ]
}

// user orders cart final OBJ
export interface CartOrdersSentObj {
    orders : CartOrdersAdjustedObj[]
}

// user orders sent OBJ
export interface UserOrdersSentObj {
    phone: string;
    city: string;
    street: string;
    orders : CartOrdersAdjustedObj[];
}

// order form obj
export interface OrderFormObj {
    plantItems: [
      {
        type: string,
        artype: string,
        price: number
      }
    ]
  }
