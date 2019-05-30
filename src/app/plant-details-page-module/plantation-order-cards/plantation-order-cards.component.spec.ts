import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationOrderCardsComponent } from './plantation-order-cards.component';

describe('PlantationOrderCardsComponent', () => {
  let component: PlantationOrderCardsComponent;
  let fixture: ComponentFixture<PlantationOrderCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationOrderCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationOrderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
