import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelledComponent } from './product-selled/product-selled.component';
import { RouterModule } from '@angular/router';
import { EcommerceMetricsModule } from 'projects/ecommerce-metrics/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [ProductSelledComponent],
  imports: [
    CommonModule,
    RouterModule,
    EcommerceMetricsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class MetricsModule { }
