import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsReturnsComponent } from './leads-returns.component';

describe('LeadsReturnsComponent', () => {
  let component: LeadsReturnsComponent;
  let fixture: ComponentFixture<LeadsReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
