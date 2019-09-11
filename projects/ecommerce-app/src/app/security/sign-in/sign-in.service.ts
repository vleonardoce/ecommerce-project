import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable()
export class SignInService {

  constructor(private fAuth: AngularFireAuth) { }

  getUser() {

  }

  signIn() {
    console.log('redirecting');
  }

  signInWithGoogle() {
    this.fAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
