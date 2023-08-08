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
import { IClient } from '../data/models/IClient';
import { IOrganization } from '../data/models/IOrganization';

@Controller('/clients')
export class ClientsController {
  constructor(private dataContext: DataContext) {}
  @Get('/clients')
  async getClients() {
    // get  all organizations from the data context
    const organizations = await this.dataContext.organizations.find();
    // get all clients from all organizations
    let clients = [];
    organizations.forEach((organization) => {
      // add the organization to each client's organization property
      organization.clients.forEach((client) => {
        if (client.organizations == null) {
          client.organizations = [];
        }
        client.organizations.push({
          id: organization.id,
          name: organization.name,
        } as any);
      });

      clients = [...clients, ...organization.clients];
    });
    return clients;
  }
  @Get('/clientsByOrganization/:id')
  async getClientsByOrganization(@Params('id') id: number) {
    const organizations = await this.dataContext.organizations.find();
    const organization = organizations.find(
      (organization) => organization.id === +id
    );
    return organization.clients.map((client) => client);
  }
  @Get('/client/:id')
  async getClient(@Params('id') id: string) {
    return (
      await this.dataContext.organizations.findOne((organization) =>
        organization.clients.some((client) => client.id === +id)
      )
    ).clients.find((client) => client.id === +id);
  }
}
