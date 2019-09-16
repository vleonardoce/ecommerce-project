import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropzoneDirective } from './directives/dropzone/dropzone.directive';

@NgModule({
  declarations: [
    DropzoneDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropzoneDirective
  ]
})
export class EcommerceUiModule { }
