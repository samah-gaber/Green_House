import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewPageComponent } from './orders-view-page.component';

describe('OrdersViewPageComponent', () => {
  let component: OrdersViewPageComponent;
  let fixture: ComponentFixture<OrdersViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
