import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProfileComponent } from './core/profile/profile.component';
import { PublishComponent } from './sales/publish/publish.component';
import { SalesModule } from './sales/sales.module';
import { SalesComponent } from './sales/sales/sales.component';
import { ProductSelledComponent } from './metrics/product-selled/product-selled.component';
import { MetricsModule } from './metrics/metrics.module';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'producto/:uid',
    component: ProductDetailComponent
  },
  {
    path: 'publicar',
    component: PublishComponent
  },
  {
    path: 'ventas',
    component: SalesComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
  {
    path: 'product-selled',
    component: ProductSelledComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, MetricsModule, SalesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
