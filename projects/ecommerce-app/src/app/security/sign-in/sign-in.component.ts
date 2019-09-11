import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ecm-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted = false;
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.signInForm.valid) {
      const user = this.signInForm.value;
      this.signInService.signIn(user).then(
        () => this.router.navigate(['products'])
      );
    }
  }

  signInWithGoogle() {
    this.signInService.signInWithGoogle();
  }
}
