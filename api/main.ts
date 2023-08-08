import * as express from 'express';
import { attachControllers, Container } from '@decorators/express';
import { DataContext } from './data/context';
import { getControllers } from './getController';

const port = 3000;
const app = express();

export const start = async () => {
  Container.provide([{ provide: DataContext, useClass: DataContext }]);
  const controllers = await getControllers();
  await attachControllers(app, controllers);

  app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
  });
};
start().catch(console.error);
