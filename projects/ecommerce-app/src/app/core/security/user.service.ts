import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth) { }

  get() {
    return this.fireAuth.authState;
  }

}
