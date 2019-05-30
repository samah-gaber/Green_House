import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationOrderSingleCardComponent } from './plantation-order-single-card.component';

describe('PlantationOrderSingleCardComponent', () => {
  let component: PlantationOrderSingleCardComponent;
  let fixture: ComponentFixture<PlantationOrderSingleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationOrderSingleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationOrderSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
