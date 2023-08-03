import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./components/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./components/clients/client.module').then(
            (m) => m.ClientModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./components/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: '',
        component: NxWelcomeComponent,
      },
    ],
  },
];
