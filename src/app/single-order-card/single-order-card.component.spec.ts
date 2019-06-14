import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrderCardComponent } from './single-order-card.component';

describe('SingleOrderCardComponent', () => {
  let component: SingleOrderCardComponent;
  let fixture: ComponentFixture<SingleOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
