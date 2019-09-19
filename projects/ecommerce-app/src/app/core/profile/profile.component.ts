import { Component, OnInit, OnDestroy } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ecm-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  user = null;
  userSubscription: Subscription;

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
    this.userSubscription = this.securityService.getUserInfo().subscribe(
      (user => this.user = user)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
