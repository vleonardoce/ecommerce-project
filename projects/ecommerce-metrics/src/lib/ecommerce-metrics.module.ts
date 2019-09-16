import { NgModule } from '@angular/core';
import { EcommerceMetricsComponent } from './ecommerce-metrics.component';
import { SimpleBarChartComponent } from './components/simple-bar-chart/simple-bar-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [EcommerceMetricsComponent, SimpleBarChartComponent],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [EcommerceMetricsComponent, SimpleBarChartComponent]
})
export class EcommerceMetricsModule { }
