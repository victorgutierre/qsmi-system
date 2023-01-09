import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteGeneratorComponent } from './website-generator.component';

describe('WebsiteGeneratorComponent', () => {
  let component: WebsiteGeneratorComponent;
  let fixture: ComponentFixture<WebsiteGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
