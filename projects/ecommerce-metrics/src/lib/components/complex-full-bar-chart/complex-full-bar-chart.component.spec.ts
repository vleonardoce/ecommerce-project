import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFullBarChartComponent } from './complex-full-bar-chart.component';

describe('ComplexFullBarChartComponent', () => {
  let component: ComplexFullBarChartComponent;
  let fixture: ComponentFixture<ComplexFullBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFullBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFullBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
