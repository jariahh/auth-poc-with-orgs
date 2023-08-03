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

class IUser {
  id: number;
  name: string;
}

@Controller('/users')
export class UsersController {
  constructor(private dataContext: DataContext) {}
  @Get('/users')
  getUsers() {
    return this.dataContext.users;
  }

  @Get('/user/:id')
  getUser(@Params('id') id: string) {
    return this.dataContext.users.find((user) => user.id === +id);
  }

  @Put('/user')
  putUser(@Params('user') user: IUser) {
    this.dataContext.users.push(user);
  }

  @Post('/user/:id')
  postUser(@Params('id') id: string, @Params('user') user: IUser) {
    const index = this.dataContext.users.findIndex((user) => user.id === +id);
    this.dataContext.users[index] = user;
    return this.dataContext.users[index];
  }

  @Delete('/user/:id')
  deleteUser(@Params('id') id: string) {
    const index = this.dataContext.users.findIndex((user) => user.id === +id);
    this.dataContext.users.splice(index, 1);
    return this.dataContext.users.indexOf(this.dataContext.users[index]) === -1;
  }
}
