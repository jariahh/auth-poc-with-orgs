import { IOrganization } from './IOrganization';
import { IClient } from './IClient';
import { IProject } from './IProject';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  organizationIds: number[];
  organizations?: IOrganization[];
  clientIds: number[];
  clients?: IClient[];
  projectIds: number[];
  projects?: IProject[];
}
