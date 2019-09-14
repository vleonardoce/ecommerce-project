import { Component, OnInit, OnDestroy } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'ecm-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user = {};

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
    this.securityService.getUserInfo().subscribe(
      (user => this.user = user)
    );
  }

}
