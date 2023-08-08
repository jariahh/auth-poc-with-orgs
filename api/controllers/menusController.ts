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
import { IMenu } from '../data/models/IMenu';

@Controller('/menus')
export class MenusController {
  constructor(private dataContext: DataContext) {}

  @Get('/menus')
  getMenus() {
    return this.dataContext.menus.find();
  }

  @Get('/menu/:id')
  getMenu(@Params('id') id: string) {
    return this.dataContext.menus.find((menu) => menu.id === +id);
  }
  @Get('/menuByClient/:id')
  async getByClientMenu(@Params('id') id: string) {
    const menus = await this.dataContext.menus.find();
    try {
      return this.menuByClient(menus, id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  private menuByClient(menus: IMenu[], clientId: string) {
    //filter menus by clientids
    const filteredMenus = menus.filter((menu) =>
      menu.clientIds.includes(+clientId)
    );
    // set clientIds to null for returned menus
    filteredMenus.forEach((menu) => (menu.clientIds = null));
    // foreach of the filtered menus, filter the menu children
    filteredMenus.forEach((menu) => {
      if (menu.children == null) return;
      menu.children = this.menuByClient(menu.children, clientId);
    });
    return filteredMenus;
  }
}
