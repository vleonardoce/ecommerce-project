import { SecurityService } from '../security/security.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ecm-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: firebase.User;

  constructor(private securityService: SecurityService, private modalService: NgbModal, private router: Router) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit() {
    this.securityService.getSignedInUser().subscribe(
      (user => this.user = user)
    );
  }

  signOut() {
    this.securityService.signOut().then(
      () => this.router.navigate([''])
    );
  }
}
