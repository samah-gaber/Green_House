import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavSingleCardComponent } from './user-fav-single-card.component';

describe('UserFavSingleCardComponent', () => {
  let component: UserFavSingleCardComponent;
  let fixture: ComponentFixture<UserFavSingleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavSingleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
