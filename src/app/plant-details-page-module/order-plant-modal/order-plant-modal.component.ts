import { Component, OnInit } from "@angular/core";
// MDB Angular Free
import {
  ModalModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
  MDBModalRef
} from "angular-bootstrap-md";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CartService } from "../../services/cart.service";
import { OrderFormObj } from "../../interfaces/order-interface";

@Component({
  selector: "app-order-plant-modal",
  templateUrl: "./order-plant-modal.component.html",
  styleUrls: ["./order-plant-modal.component.scss"]
})
export class OrderPlantModalComponent implements OnInit {
  orderForm: FormGroup;
  userOrder;
  // userOrder: userSingleOrder;
  content: any;
  showEmptyOrderError = false;
  orderFormObj: OrderFormObj;
  // orderFormObj = {
  //   plantItems: [
  //     {
  //       type: 'graft',
  //       artype: 'شتلة',
  //       price: 7
  //     },
  //     {
  //       type: 'seeds',
  //       artype: 'بذور',
  //       price: 7
  //     },
  //     {
  //       type: 'soil',
  //       artype: 'تربة',
  //       price: 7
  //     },
  //     {
  //       type: 'fert',
  //       artype: 'سماد',
  //       price: 7
  //     }
  //   ]
  // }

  constructor(
    public orderModalRef: MDBModalRef,
    private fb: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getOrderFormData({
      plantationid: this.content.plantationId,
      plantid: this.content.plantId
    });

    this.orderForm = this.fb.group(
      {
        graftType: "",
        graftQty: "1",
        seedsType: "",
        seedsQty: "1",
        soilType: "",
        soilQty: "1",
        fertType: "",
        fertQty: "1"
      },
      {
        validator: (formGroup: FormGroup) => {
          return this.validateOrderForm(formGroup);
        }
      }
    );

    this.adjustOrderFormObj(this.orderFormObj);
  }

  validateOrderForm(formGroup: FormGroup) {
    if (
      !formGroup.controls["graftType"].value &&
      !formGroup.controls["seedsType"].value &&
      !formGroup.controls["soilType"].value &&
      !formGroup.controls["fertType"].value
    ) {
      return { validateOrderForm: true };
    } else {
      return null;
    }
  }

  enableQtyInput(event) {
    this.showEmptyOrderError = false;
    const nameAttr = event.target.getAttribute("name");
    if (event.target.checked) {
      (<HTMLInputElement>document.getElementById(nameAttr)).disabled = false;
    } else {
      (<HTMLInputElement>document.getElementById(nameAttr)).disabled = true;
    }
  }

  addToCart(form: FormGroup) {
    if (form.valid) {
      this.userOrder = {
        plantation_id: this.content.plantationId,
        plantation_name: this.content.plantationName,
        totalprice: 0,
        plantid: this.content.plantId,
        plantname: this.content.plantName,
        plantimg: "https://picsum.photos/200/300",
        itemContents: []
      };

      if (form.value.graftType) {
        let graftQty = form.value.graftQty;
        this.addItemToOrder(graftQty, "graftPrice", "graft");
      }
      if (form.value.seedsType) {
        let seedsQty = form.value.seedsQty;        
        this.addItemToOrder(seedsQty, "seedsPrice", "seeds");
      }
      if (form.value.soilType) {
        let soilQty = form.value.soilQty;        
        this.addItemToOrder(soilQty, "soilPrice", "soil");
      }
      if (form.value.fertType) {
        let fertQty = form.value.fertQty;        
        this.addItemToOrder(fertQty, "fertPrice", "fert");
      }

      this.calcOrderTotalPrice(this.userOrder);

      this.saveOrderToLocaolStorage(this.userOrder);

      this.orderModalRef.hide();
    } else {
      this.showEmptyOrderError = true;
    }
  }

  saveOrderToLocaolStorage(order) {
    let storedOrderKey = `CI_${order.plantation_id}_${order.plantid}`;
    let storedOrder;
    let typeNotExist = true;
    if (localStorage.getItem(storedOrderKey)) {
      storedOrder = JSON.parse(localStorage.getItem(storedOrderKey));

      order.itemContents.forEach(element => {
        storedOrder.itemContents.forEach(elt => {
          if (element.type == elt.type) {
            elt.quantity += element.quantity;
            elt.totalPrice += element.totalPrice;
            typeNotExist = false;
          }
        });

        if (typeNotExist) {
          storedOrder.itemContents.push(element);
        }
      });
      storedOrder.totalprice += order.totalprice;
    } else {
      storedOrder = order;
      this.cartService.increaseCartCount();
      // this.setCartCountInLocalStorage();
    }
    localStorage.setItem(storedOrderKey, JSON.stringify(storedOrder));
  }

  adjustOrderFormObj(formObj) {
    console.log('order plant modal component',formObj );
    formObj.plantItems.forEach(elt => {
      elt.checkCName = `${elt.type}Type`;
      elt.inputCName = `${elt.type}Qty`;
      elt.priceName = `${elt.type}Price`;
    });
  }

  addItemToOrder(quantity, priceId, type) {
    let typeQty = quantity;
    let typePrice = +document.getElementById(priceId).innerHTML;
    this.userOrder.itemContents.push({
      type: type,
      price: typePrice,
      quantity: typeQty,
      totalPrice: typePrice * typeQty
    });
  }

  calcOrderTotalPrice(order) {
    let totalPrice: number = 0;
    order.itemContents.forEach(elt => {
      totalPrice += elt.totalPrice;
    });
    order.totalprice = totalPrice;
  }

  setCartCountInLocalStorage() {
    let storedCartCount: number = 0;
    if (localStorage.getItem("cartCount")) {
      storedCartCount = +localStorage.getItem("cartCount");
      storedCartCount += 1;
      localStorage.setItem("cartCount", JSON.stringify(storedCartCount));
    } else {
      localStorage.setItem("cartCount", JSON.stringify(1));
    }
  }

  getOrderFormData(plantationPlantObj) {
    this.cartService.orderFormDataGetRequest(plantationPlantObj).subscribe(
      (res: OrderFormObj) => {
        this.orderFormObj = res;
        console.log('order plant modal component => getOrderFormData response', res);
        console.log('order plant modal component => getOrderFormData', this.orderFormObj);
      });
  }
}
