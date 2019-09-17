import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PublishComponent } from './sales/publish/publish.component';
import { SalesModule } from './sales/sales.module';
import { SalesComponent } from './sales/sales/sales.component';
import { ProductSelledComponent } from './metrics/product-selled/product-selled.component';
import { MetricsModule } from './metrics/metrics.module';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './core/profile/profile.component';
import { ShoppingComponent } from './products/shopping/shopping.component';
import { OrderComponent } from './products/order/order.component';

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
    component: PublishComponent
  },
  {
    path: 'ordenar',
    component: OrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'compras',
    component: ShoppingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ventas',
    component: ProductSelledComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, MetricsModule, SalesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
