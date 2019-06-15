import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataOrderModalComponent } from './user-data-order-modal.component';

describe('UserDataOrderModalComponent', () => {
  let component: UserDataOrderModalComponent;
  let fixture: ComponentFixture<UserDataOrderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataOrderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
