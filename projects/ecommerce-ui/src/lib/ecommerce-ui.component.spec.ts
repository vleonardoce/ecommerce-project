import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceUiComponent } from './ecommerce-ui.component';

describe('EcommerceUiComponent', () => {
  let component: EcommerceUiComponent;
  let fixture: ComponentFixture<EcommerceUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
