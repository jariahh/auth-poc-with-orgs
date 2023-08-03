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
    return this.dataContext.organizations;
  }

  @Get('/organization/:id')
  getOrganization(@Params('id') id: string) {
    return this.dataContext.organizations.find(
      (organization) => organization.id === +id
    );
  }

  @Put('/organization')
  putOrganization(@Params('organization') organization: any) {
    this.dataContext.organizations.push(organization);
    return organization;
  }

  @Post('/organization/:id')
  postOrganization(
    @Params('id') id: string,
    @Params('organization') organization: any
  ) {
    const index = this.dataContext.organizations.findIndex(
      (organization) => organization.id === +id
    );
    this.dataContext.organizations[index] = organization;
    return this.dataContext.organizations[index];
  }

  @Delete('/organization/:id')
  deleteOrganization(@Params('id') id: string) {
    const index = this.dataContext.organizations.findIndex(
      (organization) => organization.id === +id
    );
    this.dataContext.organizations.splice(index, 1);
    return (
      this.dataContext.organizations.indexOf(
        this.dataContext.organizations[index]
      ) === -1
    );
  }
}
