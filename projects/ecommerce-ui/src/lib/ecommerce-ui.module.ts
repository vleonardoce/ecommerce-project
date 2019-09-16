import { NgModule } from '@angular/core';
import { EcommerceUiComponent } from './ecommerce-ui.component';
import { DropzoneDirective } from './directives/dropzone/dropzone.directive';

@NgModule({
  declarations: [EcommerceUiComponent, DropzoneDirective],
  imports: [
  ],
  exports: [EcommerceUiComponent, DropzoneDirective]
})
export class EcommerceUiModule { }
