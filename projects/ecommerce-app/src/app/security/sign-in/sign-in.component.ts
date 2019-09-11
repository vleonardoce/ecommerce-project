import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'ecm-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private signInService: SignInService) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.signInService.signInWithGoogle();
  }
}
