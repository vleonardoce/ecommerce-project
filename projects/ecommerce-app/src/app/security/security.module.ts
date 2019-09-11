import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in/sign-in.service';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule],
  providers: [SignInService]
})
export class SecurityModule { }
