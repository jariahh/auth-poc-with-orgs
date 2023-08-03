import {
  Response,
  Params,
  Controller,
  Get,
  Put,
  Post,
  Delete,
} from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/menus')
export class MenusController {
  constructor(private dataContext: DataContext) {}

  @Get('/menus')
  getMenus() {
    return this.dataContext.menus;
  }

  @Get('/menu/:id')
  getMenu(@Params('id') id: string) {
    return this.dataContext.menus.find((menu) => menu.id === +id);
  }
  @Get('/menuByClient/:id')
  getByClientMenu(@Params('id') id: string) {
    return this.dataContext.menus.filter((menu) =>
      menu.clients.some((clientId) => clientId === Number(id))
    );
  }

  @Put('/menu')
  putMenu(@Params('menu') menu: any) {
    this.dataContext.menus.push(menu);
    return menu;
  }

  @Post('/menu/:id')
  postMenu(@Params('id') id: string, @Params('menu') menu: any) {
    const index = this.dataContext.menus.findIndex((menu) => menu.id === +id);
    this.dataContext.menus[index] = menu;
    return this.dataContext.menus[index];
  }

  @Delete('/menu/:id')
  deleteMenu(@Params('id') id: string) {
    const index = this.dataContext.menus.findIndex((menu) => menu.id === +id);
    this.dataContext.menus.splice(index, 1);
    return this.dataContext.menus.indexOf(this.dataContext.menus[index]) === -1;
  }
}
