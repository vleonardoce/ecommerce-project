import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
