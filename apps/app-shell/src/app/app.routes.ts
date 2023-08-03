import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ':organizationId/:clientId',
        children: [{ path: '**', component: LoadingComponent }],
      },
      {
        path: '',
        children: [{ path: '**', component: LoadingComponent }],
      },
    ],
  },
];
