import { SignInService } from './../../security/sign-in/sign-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecm-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: firebase.User;

  constructor(private signInService: SignInService) { }

  ngOnInit() {
    this.signInService.getSignedInUser().subscribe(
      (user => this.user = user)
    );
  }

  signOut() {
    this.signInService.signOut();
  }
}
