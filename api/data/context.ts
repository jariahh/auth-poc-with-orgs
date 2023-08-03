import { Injectable } from '@decorators/di';
export interface IMenu {
  id: number;
  name: string;
  modules?: string;
  icon: string;
  url: string;
  clients: number[];
}
@Injectable()
export class DataContext {
  constructor() {
    console.log('Context');
  }

  public organizations: any[] = [
    { id: 1, name: 'Marvel Universe', clients: [1, 2] },
    { id: 2, name: 'DC Universe', clients: [3, 4] },
  ];
  public menus: IMenu[] = [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'dashboard',
      url: 'dashboard',
      modules: 'DashboardModule',
      clients: [1, 2],
    },
    {
      id: 2,
      name: 'Projects',
      icon: 'work',
      url: 'projects',
      modules: 'ProjectsModule',
      clients: [1, 2],
    },
    {
      id: 3,
      name: 'Clients',
      modules: 'ClientsModule',
      icon: 'people',
      url: 'clients',
      clients: [1, 4],
    },
    {
      id: 4,
      name: 'Users',
      modules: 'UsersModule',
      icon: 'person',
      url: 'users',
      clients: [3, 4],
    },
    {
      id: 5,
      name: 'Settings',
      modules: 'SettingsModule',
      icon: 'settings',
      url: 'settings',
      clients: [1, 2, 3, 4],
    },
  ];
  public clients: any[] = [
    { id: 1, name: 'Batman enterprises', projects: 2 },
    { id: 2, name: 'Superman inc.', projects: 1 },
    { id: 3, name: 'Spiderman corp.', projects: 3 },
    { id: 4, name: 'Ironman ltd.', projects: 2 },
  ];
  public users: any[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com' },
    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 5, name: 'John Brown', email: 'john.brown@example.com' },
  ];
  public projects: any[] = [
    { id: 1, name: 'Project Batmobile', client: 1 },
    { id: 2, name: 'Project Batcave', client: 1 },
    { id: 3, name: 'Project Batwing', client: 1 },
    { id: 4, name: 'Project Batboat', client: 1 },
    { id: 5, name: 'Project Batcopter', client: 1 },
    { id: 6, name: 'Project Batcomputer', client: 1 },
    { id: 7, name: 'Project Batbelt', client: 1 },
    { id: 8, name: 'Project Superman Cape', client: 2 },
    { id: 9, name: 'Project Superman Boots', client: 2 },
    { id: 10, name: 'Project Superman Suit', client: 2 },
    { id: 11, name: 'Project Superman Glasses', client: 2 },
    { id: 12, name: 'Project Superman Underwear', client: 2 },
    { id: 13, name: 'Project Spiderman Web', client: 3 },
    { id: 14, name: 'Project Spiderman Suit', client: 3 },
    { id: 15, name: 'Project Spiderman Mask', client: 3 },
    { id: 16, name: 'Project Spiderman Underwear', client: 3 },
    { id: 17, name: 'Project Spiderman Shoes', client: 3 },
    { id: 18, name: 'Project Spiderman Gloves', client: 3 },
    { id: 19, name: 'Project Ironman Suit', client: 4 },
    { id: 20, name: 'Project Ironman Mask', client: 4 },
    { id: 21, name: 'Project Ironman Underwear', client: 4 },
    { id: 22, name: 'Project Ironman Shoes', client: 4 },
    { id: 23, name: 'Project Ironman Gloves', client: 4 },
  ];
  public settings: any[] = [
    { id: 1, name: 'General', icon: 'settings', url: 'general' },
    { id: 2, name: 'Users', icon: 'person', url: 'users' },
    { id: 3, name: 'Clients', icon: 'people', url: 'clients' },
    { id: 4, name: 'Projects', icon: 'work', url: 'projects' },
    { id: 5, name: 'Dashboards', icon: 'dashboard', url: 'dashboards' },
  ];
  public dashboards: any[] = [
    { id: 1, name: 'Dashboard 1' },
    { id: 2, name: 'Dashboard 2' },
    { id: 3, name: 'Dashboard 3' },
    { id: 4, name: 'Dashboard 4' },
  ];
  public dashboardWidgets: any[] = [
    {
      id: 1,
      name: 'Widget 1',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 453.56 },
        { salesDate: new Date('06/10/2020T12:03:04'), value: 353.56 },
        { salesDate: new Date('06/11/2020T12:03:04'), value: 253.56 },
        { salesDate: new Date('06/06/2020T12:03:04'), value: 153.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 53.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 53.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 53.56 },
      ],
    },
    {
      id: 2,
      name: 'Widget 2',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 453.56 },
      ],
    },
    {
      id: 3,
      name: 'Widget 3',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 453.56 },
      ],
    },
    {
      id: 4,
      name: 'Widget 4',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 453.56 },
      ],
    },
    {
      id: 5,
      name: 'Widget 5',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
        { salesDate: new Date('06/09/2020T12:03:04'), value: 453.56 },
      ],
    },
    {
      id: 6,
      name: 'Widget 6',
      dashboard: 1,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
      ],
    },
    {
      id: 7,
      name: 'Widget 7',
      dashboard: 2,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
      ],
    },
    {
      id: 8,
      name: 'Widget 8',
      dashboard: 2,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
      ],
    },
    {
      id: 9,
      name: 'Widget 9',
      dashboard: 2,
      data: [
        { salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 },
        { salesDate: new Date('06/07/2020T12:03:04'), value: 653.56 },
        { salesDate: new Date('06/08/2020T12:03:04'), value: 553.56 },
      ],
    },
    {
      id: 10,
      name: 'Widget 10',
      dashboard: 2,
      data: [{ salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 }],
    },
    {
      id: 11,
      name: 'Widget 11',
      dashboard: 2,
      data: [{ salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 }],
    },
    {
      id: 12,
      name: 'Widget 12',
      dashboard: 2,
      data: [{ salesDate: new Date('06/06/2020T12:03:04'), value: 753.56 }],
    },
    {
      id: 13,
      name: 'Widget 13',
      dashboard: 2,
      data: [{ salesDate: new Date('06/06/2020T12:03:04'), value: 53.56 }],
    },
    {
      id: 14,
      name: 'Widget 14',
      dashboard: 2,
      data: [{ salesDate: new Date('06/06/2020T12:03:04'), value: 53.56 }],
    },
  ];
}
