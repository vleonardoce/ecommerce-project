import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelledComponent } from './product-selled/product-selled.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [ProductSelledComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class MetricsModule { }
