import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-poc-with-orgs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}
}
