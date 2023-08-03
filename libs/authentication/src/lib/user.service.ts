import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService, User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<User | null | undefined>(null);
  accessToken$ = new BehaviorSubject<any>(null);
  constructor(private authService: AuthService) {}
  logout() {
    console.log('logout', `${window.location.origin}/logout`);
    this.authService.logout({
      logoutParams: {
        returnTo: `${window.location.origin}/logout`,
      },
    });
  }
}
