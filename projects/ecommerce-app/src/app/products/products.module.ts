import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingComponent } from './shopping/shopping.component';
import { OrderComponent } from './order/order.component';
import { EcommerceUiModule } from 'projects/ecommerce-ui/src/public-api';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ShoppingComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    EcommerceUiModule
  ]
})
export class ProductsModule { }
