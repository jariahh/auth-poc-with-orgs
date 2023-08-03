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

@Controller('/clients')
export class ClientsController {
  constructor(private dataContext: DataContext) {}
  @Get('/clients')
  getClients() {
    return this.dataContext.clients;
  }
  @Get('/clientsByOrganization/:id')
  getClientsByOrganization(@Params('id') id: string) {
    // get the organization by id
    const organization = this.dataContext.organizations.find(
      (value) => value.id === +id
    );
    // get the clients by the list of client ids in the organization
    return this.dataContext.clients.filter((client) =>
      organization.clients.some((clientId) => clientId === client.id)
    );
  }
  @Get('/client/:id')
  getClient(@Params('id') id: string) {
    return this.dataContext.clients.find((client) => client.id === +id);
  }
  @Put('/client')
  putClient(@Params('client') client: any) {
    this.dataContext.clients.push(client);
    return client;
  }
  @Post('/client/:id')
  postClient(@Params('id') id: string, @Params('client') client: any) {
    const index = this.dataContext.clients.findIndex(
      (client) => client.id === +id
    );
    this.dataContext.clients[index] = client;
    return this.dataContext.clients[index];
  }
  @Delete('/client/:id')
  deleteClient(@Params('id') id: string) {
    const index = this.dataContext.clients.findIndex(
      (client) => client.id === +id
    );
    this.dataContext.clients.splice(index, 1);
    return (
      this.dataContext.clients.indexOf(this.dataContext.clients[index]) === -1
    );
  }
}
