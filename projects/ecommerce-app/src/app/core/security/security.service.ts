import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, first, map } from 'rxjs/operators';

@Injectable()
export class SecurityService {

  constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  getSignedInUser() {
    return this.fireAuth.authState;
  }

  signIn(credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signInWithGoogle() {
    return this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    return this.fireAuth.auth.signOut();
  }

  saveUser(user) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  saveUserInfo(user) {
    const info = {
      email: user.email,
      names: user.displayName
    };
    this.firestore.collection('users').doc(user.uid).set(info);
  }

  getUserInfo() {
    return this.fireAuth.user.pipe(switchMap(user => {
      return this.firestore.collection('users').doc(user.uid).get().pipe(
        map(item => {
          return { ...item.data() };
        }));
    }));
  }
}
