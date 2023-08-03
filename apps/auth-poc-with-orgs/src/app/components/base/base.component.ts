import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {BehaviorSubject, tap} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "@auth-poc-with-orgs/authentication";

@Component({
  selector: 'auth-poc-with-orgs-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
    constructor(private authService: AuthService, private userService: UserService) {
      authService.user$.subscribe((user) => {
        this.userService.user$.next(user);
      });
      authService.getAccessTokenSilently()
        .pipe(tap({
          next: token => {
            const jwtHelper = new JwtHelperService();
            const accessToken = jwtHelper.decodeToken(token);
            this.userService.accessToken$.next(accessToken);
          }
        }))
        .subscribe();
    }
}
