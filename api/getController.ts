import { Glob, glob } from 'glob';
export type Type<C extends object = object> = new (...args: any) => C;
export const getControllers = async (): Promise<Type[]> => {
  const path = `controllers/**/*.ts`;
  const controllers: Type[] = [];
  const files = await glob(path, { cwd: __dirname });
  files.forEach((file) => {
    const classes = Object.values(require(__dirname + '/' + file));
    const controllersInFile = classes.filter((c) => {
      const ctrl = new (c as any)().constructor.name;
      return ctrl.endsWith('Controller');
    });
    controllers.push(...(controllersInFile as any[]));
  });
  // list the controllers to the console
  console.log(controllers);
  return controllers;
};
