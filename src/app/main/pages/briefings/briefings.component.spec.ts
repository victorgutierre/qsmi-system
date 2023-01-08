import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefingsComponent } from './briefings.component';

describe('BriefingsComponent', () => {
  let component: BriefingsComponent;
  let fixture: ComponentFixture<BriefingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
