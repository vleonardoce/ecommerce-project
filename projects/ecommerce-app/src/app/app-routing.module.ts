import { SecurityModule } from './security/security.module';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RegisterComponent } from './security/register/register.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
