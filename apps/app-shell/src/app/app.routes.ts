import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

export const defaultRoutes: Route[] = [
  { path: 'loading', component: LoadingComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./components/access-denied/access-denied.module').then(
        (m) => m.AccessDeniedModule
      ),
  },
];
export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ':organizationId/:clientId',
        children: [...defaultRoutes],
      },
      {
        path: '',
        children: [...defaultRoutes],
      },
    ],
  },
];
