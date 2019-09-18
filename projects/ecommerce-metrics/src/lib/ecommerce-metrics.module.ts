import { NgModule } from '@angular/core';
import { EcommerceMetricsComponent } from './ecommerce-metrics.component';
import { SimpleBarChartComponent } from './components/simple-bar-chart/simple-bar-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComplexFullBarChartComponent } from './components/complex-full-bar-chart/complex-full-bar-chart.component';
import { ComplexBarChartComponent } from './components/complex-bar-chart/complex-bar-chart.component';

@NgModule({
  declarations: [EcommerceMetricsComponent, SimpleBarChartComponent, ComplexFullBarChartComponent, ComplexBarChartComponent],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [EcommerceMetricsComponent, SimpleBarChartComponent, ComplexFullBarChartComponent, ComplexBarChartComponent]
})
export class EcommerceMetricsModule { }
