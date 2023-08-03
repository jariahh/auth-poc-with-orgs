import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ':organizationId/:clientId',
        loadChildren: () =>
          // eslint-disable-next-line @nx/enforce-module-boundaries
          import('@auth-poc-with-orgs/pages/src/app/app.module').then(
            (m) => m.AppModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          // eslint-disable-next-line @nx/enforce-module-boundaries
          import('@auth-poc-with-orgs/pages/src/app/app.module').then(
            (m) => m.AppModule
          ),
      },
    ],
  },
];
