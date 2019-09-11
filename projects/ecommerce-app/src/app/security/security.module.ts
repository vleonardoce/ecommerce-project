import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

import { SignInService } from './sign-in/sign-in.service';

@NgModule({
  declarations: [SignInComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignInService]
})
export class SecurityModule { }
