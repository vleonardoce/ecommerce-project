import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable()
export class SignInService {

  constructor(private fAuth: AngularFireAuth) { }

  getSignedInUser() {
    return this.fAuth.authState;
  }

  signIn(user) {
    return this.fAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    this.fAuth.auth.signOut();
  }

  saveUser(user) {
    return this.fAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signInWithGoogle() {
    this.fAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
