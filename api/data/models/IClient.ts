import { IOrganization } from './IOrganization';
import { IProject } from './IProject';
import { IDashboard } from './IDashboard';
import { IMenu } from './IMenu';

export interface IClient {
  id: number;
  name: string;
  organizationIds: number[];
  organizations?: IOrganization[];
  projectIds: number[];
  projects?: IProject[];
  dashboardIds: number[];
  dashboards?: IDashboard[];
  menuIds: number[];
  menus?: IMenu[];
}
