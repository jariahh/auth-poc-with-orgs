import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { LogoutComponent } from './components/logout/logout.component';
import { BaseComponent } from './components/base/base.component';

export const appRoutes: Route[] = [
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent,
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: BaseComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
          // eslint-disable-next-line @nx/enforce-module-boundaries
          import('@app-shell/src/app/app.module').then((m) => m.AppModule),
      },
    ],
  },
];
