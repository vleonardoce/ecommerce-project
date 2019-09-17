import { UserService } from './../security/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../sign-in/sign-in.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private modalService: NgbModal) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.user.get().pipe(
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          this.modalService.open(SignInComponent, { ariaLabelledBy: 'modal-basic-title' });
        }
      })
    );
  }
}
