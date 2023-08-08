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
import { IUser } from '../data/models/IUser';

@Controller('/users')
export class UsersController {
  constructor(private dataContext: DataContext) {}
  @Get('/users')
  getUsers() {
    return this.dataContext.users.find();
  }

  @Get('/user/:id')
  getUser(@Params('id') id: string) {
    return this.dataContext.users.findOne((user) => user.id === +id);
  }
}
