import * as express from 'express';
import { UsersController } from './controllers/users';
import { ClientsController } from './controllers/clients';
import { MenusController } from './controllers/menu';
import { OrganizationsController } from './controllers/organizations';
import { attachControllers, Container } from '@decorators/express';
import { DataContext } from './data/context';
import { SettingsController } from './controllers/settingsController';
import { ProjectsController } from './controllers/projectsController';
import { DashboardController } from './controllers/dashboardController';

const port = 3000;
const controllers = [
  MenusController,
  UsersController,
  ClientsController,
  OrganizationsController,
  SettingsController,
  ProjectsController,
  DashboardController,
];
const app = express();

export const start = async () => {
  Container.provide([{ provide: DataContext, useClass: DataContext }]);

  await attachControllers(app, controllers);

  app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
  });
};
start().catch(console.error);
