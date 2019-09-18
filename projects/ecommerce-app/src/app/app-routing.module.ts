import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductSelledComponent } from './metrics/product-selled/product-selled.component';
import { MetricsModule } from './metrics/metrics.module';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './core/profile/profile.component';
import { ProductPublishComponent } from './products/product-publish/product-publish.component';
import { ProductOrderComponent } from './products/product-order/product-order.component';
import { ProductShoopingComponent } from './products/product-shooping/product-shooping.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'producto/:uid',
    component: ProductDetailComponent
  },
  {
    path: 'publicar',
    component: ProductPublishComponent
  },
  {
    path: 'ordenar',
    component: ProductOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'compras',
    component: ProductShoopingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventas',
    component: ProductSelledComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, MetricsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
