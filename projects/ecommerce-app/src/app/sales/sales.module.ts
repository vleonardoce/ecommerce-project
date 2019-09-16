import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish/publish.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcommerceUiModule } from 'projects/ecommerce-ui/src/public-api';
import { UploadFileComponent } from './publish/upload-file/upload-file.component';

@NgModule({
  declarations: [PublishComponent, UploadFileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EcommerceUiModule
  ],
  providers: []
})
export class SalesModule { }
