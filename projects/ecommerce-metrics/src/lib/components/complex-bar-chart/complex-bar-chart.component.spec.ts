import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexBarChartComponent } from './complex-bar-chart.component';

describe('ComplexBarChartComponent', () => {
  let component: ComplexBarChartComponent;
  let fixture: ComponentFixture<ComplexBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
