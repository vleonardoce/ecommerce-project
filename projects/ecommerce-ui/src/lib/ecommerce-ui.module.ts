import { SolesPipe } from './pipes/soles.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropzoneDirective } from './directives/dropzone/dropzone.directive';

@NgModule({
  declarations: [
    DropzoneDirective,
    SolesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropzoneDirective,
    SolesPipe
  ]
})
export class EcommerceUiModule { }
