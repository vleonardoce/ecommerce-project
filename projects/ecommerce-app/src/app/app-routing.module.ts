import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProfileComponent } from './core/profile/profile.component';
import { PublishComponent } from './sales/publish/publish.component';
import { SalesModule } from './sales/sales.module';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'publicar',
    component: PublishComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, SalesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
