import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedCustomersComponent } from './finished-customers.component';

describe('FinishedCustomersComponent', () => {
  let component: FinishedCustomersComponent;
  let fixture: ComponentFixture<FinishedCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
