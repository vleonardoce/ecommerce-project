import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SecurityService } from '../security/security.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ecm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  submitted = false;
  registerForm = this.formBuilder.group({
    names: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  error = '';
  errorMessages = {
    'auth/email-already-in-use': 'El email ya está en uso por otra cuenta'
  };

  constructor(private formBuilder: FormBuilder, private signInService: SecurityService, private modalService: NgbModal) { }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const user = this.registerForm.value;

      this.signInService.saveUser(user)
        .then(response => {
          response.user.displayName = user.names;
          this.signInService.saveUserInfo(response.user);
          this.modalService.dismissAll();
        })
        .catch(response => {
          this.registerForm.controls.password.setValue('');
          this.error = this.errorMessages[response.code];
        });
    }
  }

  isInvalidControl(name: string) {
    const control = this.registerForm.get(name);
    return control.invalid && (control.dirty || this.submitted);
  }
}
