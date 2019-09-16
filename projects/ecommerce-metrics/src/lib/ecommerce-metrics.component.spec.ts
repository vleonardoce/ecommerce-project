import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceMetricsComponent } from './ecommerce-metrics.component';

describe('EcommerceMetricsComponent', () => {
  let component: EcommerceMetricsComponent;
  let fixture: ComponentFixture<EcommerceMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
