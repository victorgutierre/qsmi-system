import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensControlComponent } from './tokens-control.component';

describe('TokensControlComponent', () => {
  let component: TokensControlComponent;
  let fixture: ComponentFixture<TokensControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokensControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
