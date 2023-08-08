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

@Controller('/organizations')
export class OrganizationsController {
  constructor(private dataContext: DataContext) {}

  @Get('/organizations')
  getOrganizations() {
    return this.dataContext.organizations.find();
  }

  @Get('/organization/:id')
  getOrganization(@Params('id') id: string) {
    return this.dataContext.organizations.findOne(
      (organization) => organization.id === +id
    );
  }
}
