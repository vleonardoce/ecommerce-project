import { Component } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ecm-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  submitted = false;
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  error = '';
  errorMessages = {
    'auth/wrong-password': 'La contraseña no es válida o el usuario no tiene una contraseña',
    'auth/user-not-found': 'No hay registro de usuario correspondiente a este email'
  };

  constructor(private formBuilder: FormBuilder, private securityService: SecurityService, private modalService: NgbModal) { }

  close() {
    this.modalService.dismissAll();
  }

  signIn() {
    this.submitted = true;

    if (this.signInForm.valid) {
      const user = this.signInForm.value;

      this.securityService.signIn(user)
        .then(response => {
          this.securityService.saveUserInfo(response.user);
          this.close();
        })
        .catch(response => {
          this.signInForm.controls.password.setValue('');
          this.error = this.errorMessages[response.code];
        });
    }
  }

  isInvalidControl(name: string) {
    const control = this.signInForm.get(name);
    return control.invalid && (control.dirty || this.submitted);
  }

  signInWithGoogle() {
    this.securityService.signInWithGoogle().then(response => {
      if (response.additionalUserInfo.isNewUser) {
        this.securityService.saveUserInfo(response.user);
      }
      this.close();
    });
  }
}
