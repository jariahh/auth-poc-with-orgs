import { IClient } from './IClient';

export interface IProject {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  clientIds: number[];
  clients?: IClient[];
}
