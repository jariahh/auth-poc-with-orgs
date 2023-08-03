export const moduleMap = new Map<string, any>([
  [
    'DashboardModule',
    () =>
      import('./dashboard/dashboards.module').then((m) => m.DashboardsModule),
  ],
  [
    'ProjectsModule',
    () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  ],
  [
    'ClientsModule',
    () => import('./clients/client.module').then((m) => m.ClientModule),
  ],
  ['UsersModule', import('./users/users.module').then((m) => m.UsersModule)],
  [
    'SettingsModule',
    () => import('./settings/settings.module').then((m) => m.SettingsModule),
  ],
]);
