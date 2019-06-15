import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlantModalComponent } from './order-plant-modal.component';

describe('OrderPlantModalComponent', () => {
  let component: OrderPlantModalComponent;
  let fixture: ComponentFixture<OrderPlantModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPlantModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
