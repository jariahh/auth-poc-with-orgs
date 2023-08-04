import { Injectable } from '@decorators/di';
import * as _ from 'lodash';
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
    setTimeout(() => {
      this.menus.forEach((menu) => {
        //choose a random number of clients
        const numberOfClients = Math.floor(Math.random() * 10) + 1;
        const clients = this.clients.slice();
        menu.clients = [];
        for (let i = 0; i < numberOfClients; i++) {
          // choose a random client
          const clientIndex = Math.floor(Math.random() * clients.length);
          const client = clients[clientIndex];
          // add the client to the menu
          menu.clients.push(client.id);
          // remove the client from the list of clients
          clients.splice(clientIndex, 1);
        }
      });
      //ensure that each client is in at least one menu
      this.clients.forEach((client) => {
        const menuIndex = Math.floor(Math.random() * this.menus.length);
        const menu = this.menus[menuIndex];
        menu.clients.push(client.id);
      });
    });
  }

  public organizations: any[] = [
    {
      id: 1,
      name: 'Marvel Universe',
      clients: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 2,
      name: 'DC Universe',
      clients: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
    {
      id: 3,
      name: 'Star Wars Universe',
      clients: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    },
    {
      id: 4,
      name: 'Star Trek Universe',
      clients: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    },
  ];
  public menus: IMenu[] = [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'dashboard',
      url: 'dashboard',
      modules: 'DashboardModule',
      clients: [],
    },
    {
      id: 2,
      name: 'Projects',
      icon: 'work',
      url: 'projects',
      modules: 'ProjectsModule',
      clients: [],
    },
    {
      id: 3,
      name: 'Clients',
      modules: 'ClientsModule',
      icon: 'people',
      url: 'clients',
      clients: [],
    },
    {
      id: 4,
      name: 'Users',
      modules: 'UsersModule',
      icon: 'person',
      url: 'users',
      clients: [],
    },
    {
      id: 5,
      name: 'Settings',
      modules: 'SettingsModule',
      icon: 'settings',
      url: 'settings',
      clients: [],
    },
  ];
  public clients: any[] = [
    { id: 1, name: 'Tony Stark', organization: 1 },
    { id: 2, name: 'Steve Rogers', organization: 1 },
    { id: 3, name: 'Bruce Banner', organization: 1 },
    { id: 4, name: 'Thor Odinson', organization: 1 },
    { id: 5, name: 'Natasha Romanoff', organization: 1 },
    { id: 6, name: 'Clint Barton', organization: 1 },
    { id: 7, name: 'James Rhodes', organization: 1 },
    { id: 8, name: 'Sam Wilson', organization: 1 },
    { id: 9, name: 'Wanda Maximoff', organization: 1 },
    { id: 10, name: 'Vision', organization: 1 },
    { id: 11, name: 'Bruce Wayne', organization: 2 },
    { id: 12, name: 'Clark Kent', organization: 2 },
    { id: 13, name: 'Diana Prince', organization: 2 },
    { id: 14, name: 'Barry Allen', organization: 2 },
    { id: 15, name: 'Arthur Curry', organization: 2 },
    { id: 16, name: 'Victor Stone', organization: 2 },
    { id: 17, name: 'Hal Jordan', organization: 2 },
    { id: 18, name: 'John Stewart', organization: 2 },
    { id: 19, name: 'Oliver Queen', organization: 2 },
    { id: 20, name: 'Billy Batson', organization: 2 },
    { id: 21, name: 'Luke Skywalker', organization: 3 },
    { id: 22, name: 'Han Solo', organization: 3 },
    { id: 23, name: 'Leia Organa', organization: 3 },
    { id: 24, name: 'Lando Calrissian', organization: 3 },
    { id: 25, name: 'Chewbacca', organization: 3 },
    { id: 26, name: 'R2-D2', organization: 3 },
    { id: 27, name: 'C-3PO', organization: 3 },
    { id: 28, name: 'Mace Windu', organization: 3 },
    { id: 29, name: 'Yoda', organization: 3 },
    { id: 30, name: 'Darth Vader', organization: 3 },
    { id: 31, name: 'James T. Kirk', organization: 4 },
    { id: 32, name: 'Spock', organization: 4 },
    { id: 33, name: 'Leonard McCoy', organization: 4 },
    { id: 34, name: 'Montgomery Scott', organization: 4 },
    { id: 35, name: 'Nyota Uhura', organization: 4 },
    { id: 36, name: 'Hikaru Sulu', organization: 4 },
    { id: 37, name: 'Pavel Chekov', organization: 4 },
    { id: 38, name: 'Christine Chapel', organization: 4 },
    { id: 39, name: 'Janice Rand', organization: 4 },
    { id: 40, name: 'Nero', organization: 4 },
  ];
  public users: any[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com' },
    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 5, name: 'John Brown', email: 'john.brown@example.com' },
  ];
  public projects: any[] = [
    { id: 1, name: 'Ironman Suit', client: 1 },
    { id: 2, name: 'Ironman Gloves', client: 1 },
    { id: 3, name: 'Ironman Helmet', client: 1 },
    { id: 4, name: 'Captain America Shield', client: 2 },
    { id: 5, name: 'Captain America Suit', client: 2 },
    { id: 6, name: 'Captain America Helmet', client: 2 },
    { id: 7, name: 'Hulk Pants', client: 3 },
    { id: 8, name: 'Hulk Gloves', client: 3 },
    { id: 9, name: 'Hulk Shirt', client: 3 },
    { id: 10, name: 'Hulk Shoes', client: 3 },
    { id: 11, name: 'Thor Hammer', client: 4 },
    { id: 12, name: 'Thor Suit', client: 4 },
    { id: 13, name: 'Thor Helmet', client: 4 },
    { id: 14, name: 'Black Widow Suit', client: 5 },
    { id: 15, name: 'Black Widow Gloves', client: 5 },
    { id: 16, name: 'Black Widow Shoes', client: 5 },
    { id: 17, name: 'Hawkeye Suit', client: 6 },
    { id: 18, name: 'Hawkeye Gloves', client: 6 },
    { id: 19, name: 'Hawkeye Shoes', client: 6 },
    { id: 20, name: 'War Machine Suit', client: 7 },
    { id: 21, name: 'War Machine Gloves', client: 7 },
    { id: 22, name: 'War Machine Shoes', client: 7 },
    { id: 23, name: 'Falcon Suit', client: 8 },
    { id: 24, name: 'Falcon Gloves', client: 8 },
    { id: 25, name: 'Falcon Shoes', client: 8 },
    { id: 26, name: 'Scarlet Witch Suit', client: 9 },
    { id: 27, name: 'Scarlet Witch Gloves', client: 9 },
    { id: 28, name: 'Scarlet Witch Shoes', client: 9 },
    { id: 29, name: 'Vision Suit', client: 10 },
    { id: 30, name: 'Vision Gloves', client: 10 },
    { id: 31, name: 'Vision Shoes', client: 10 },
    { id: 32, name: 'Batman Suit', client: 11 },
    { id: 33, name: 'Batman Gloves', client: 11 },
    { id: 34, name: 'Batman Shoes', client: 11 },
    { id: 35, name: 'Superman Suit', client: 12 },
    { id: 36, name: 'Superman Gloves', client: 12 },
    { id: 37, name: 'Superman Shoes', client: 12 },
    { id: 38, name: 'Aquaman Suit', client: 13 },
    { id: 39, name: 'Aquaman Gloves', client: 13 },
    { id: 40, name: 'Aquaman Shoes', client: 13 },
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
