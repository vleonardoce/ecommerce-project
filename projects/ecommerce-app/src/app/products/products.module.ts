import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcommerceUiModule } from 'projects/ecommerce-ui/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductStoreService } from './services/product-store.service';
import { ProductOrderComponent } from './product-order/product-order.component';
import { ProductPublishComponent } from './product-publish/product-publish.component';
import { ProductShoopingComponent } from './product-shooping/product-shooping.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductOrderComponent,
    ProductPublishComponent,
    ProductShoopingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    EcommerceUiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    ProductStoreService
  ]
})
export class ProductsModule { }
