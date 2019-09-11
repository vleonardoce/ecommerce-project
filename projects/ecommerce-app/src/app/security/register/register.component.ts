import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SignInService } from '../sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ecm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private signInService: SignInService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.signInService.saveUser(user).then(
        () => this.router.navigate(['products'])
      );
    }
  }
}
