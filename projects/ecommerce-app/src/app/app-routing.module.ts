import { SecurityModule } from './security/security.module';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductSelledComponent } from './metrics/product-selled/product-selled.component';
import { MetricsModule } from './metrics/metrics.module';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'product-selled',
    component: ProductSelledComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, MetricsModule, SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
