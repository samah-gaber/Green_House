import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationHomeComponent } from './plantation-home.component';

describe('PlantationHomeComponent', () => {
  let component: PlantationHomeComponent;
  let fixture: ComponentFixture<PlantationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
