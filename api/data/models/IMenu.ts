import { IClient } from './IClient';

export interface IMenu {
  id: number;
  name: string;
  modules?: string;
  icon: string;
  url: string;
  clientIds: number[];
  clients?: IClient[];
  order: number;
  children?: IMenu[];
}
