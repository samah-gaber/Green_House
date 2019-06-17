import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlantFormComponent } from './add-new-plant-form.component';

describe('AddNewPlantFormComponent', () => {
  let component: AddNewPlantFormComponent;
  let fixture: ComponentFixture<AddNewPlantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
