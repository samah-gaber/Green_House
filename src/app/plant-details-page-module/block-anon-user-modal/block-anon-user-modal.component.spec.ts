import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAnonUserModalComponent } from './block-anon-user-modal.component';

describe('BlockAnonUserModalComponent', () => {
  let component: BlockAnonUserModalComponent;
  let fixture: ComponentFixture<BlockAnonUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockAnonUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAnonUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
