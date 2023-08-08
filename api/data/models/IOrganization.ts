import { IClient } from './IClient';

export interface IOrganization {
  id: number;
  name: string;
  clientIds: number[];
  clients?: IClient[];
}
