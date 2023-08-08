import { Injectable } from '@decorators/di';
import { Db, MongoClient } from 'mongodb';
import { IMenu } from './models/IMenu';
import { ISetting } from './models/ISetting';
import { IClient } from './models/IClient';
import { IOrganization } from './models/IOrganization';
import { IUser } from './models/IUser';
import { DbSet } from './dbSet';

@Injectable()
export class DataContext {
  private dbClient: MongoClient;
  private readonly db: Db;
  menus: DbSet<IMenu>;
  settings: DbSet<ISetting>;
  organizations: DbSet<IOrganization>;
  users: DbSet<IUser>;
  constructor() {
    // initialize the mongo database
    this.dbClient = new MongoClient('mongodb://127.0.0.1:27017');
    this.db = this.dbClient.db('auth-poc');
    this.menus = new DbSet<IMenu>('menus', this.db);
    this.settings = new DbSet<ISetting>('settings', this.db);
    this.organizations = new DbSet<IOrganization>('organizations', this.db);
    this.users = new DbSet<IUser>('users', this.db);
  }
  seedData() {
    const menu = [
      {
        id: 1,
        name: 'Home',
        url: 'home',
        icon: 'home',
        modules: 'HomeModule',
        order: 1,
        children: [
          {
            id: 7,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 8,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
      {
        id: 2,
        name: 'Clients',
        url: 'clients',
        icon: 'group',
        modules: 'ClientsModule',
        order: 2,
        children: [
          {
            id: 9,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 10,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Projects',
        url: 'projects',
        icon: 'work',
        modules: 'ProjectsModule',
        order: 3,
        children: [
          {
            id: 11,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 12,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
      {
        id: 4,
        name: 'Settings',
        url: 'settings',
        icon: 'settings',
        modules: 'SettingsModule',
        order: 4,
        children: [
          {
            id: 13,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 14,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
      {
        id: 5,
        name: 'Users',
        url: 'users',
        icon: 'person',
        modules: 'UsersModule',
        order: 5,
        children: [
          {
            id: 15,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 16,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
      {
        id: 6,
        name: 'Dashboards',
        url: 'dashboards',
        icon: 'dashboard',
        modules: 'DashboardModule',
        order: 6,
        children: [
          {
            id: 17,
            name: 'Dashboard',
            url: 'dashboard',
            icon: 'dashboard',
            modules: 'DashboardModule',
            order: 1,
          },
          {
            id: 18,
            name: 'Settings',
            url: 'settings',
            icon: 'settings',
            modules: 'SettingsModule',
            order: 2,
          },
        ],
      },
    ] as IMenu[];
    const organizations = [
      {
        id: 1,
        name: 'DC Universe',
        clients: [
          {
            name: 'Batman',
            projects: [
              { name: 'Batmobile' },
              { name: 'Batcave' },
              { name: 'Batwing' },
              { name: 'Batboat' },
              { name: 'Batcycle' },
            ],
            dashboards: [
              { name: 'Batmobile' },
              { name: 'Batcave' },
              { name: 'Batwing' },
              { name: 'Batboat' },
            ],
          },
          {
            name: 'Superman',
            projects: [
              { name: 'Kryptonite' },
              { name: 'Fortress of Solitude' },
              { name: 'Supermobile' },
              { name: 'Superman Robots' },
            ],
          },
          {
            name: 'Flash',
            projects: [
              { name: 'Flashmobile' },
              { name: 'Flashcave' },
              { name: 'Flashwing' },
              { name: 'Flashboat' },
              { name: 'Flashcycle' },
            ],
            dashboards: [
              { name: 'Flashmobile' },
              { name: 'Flashcave' },
              { name: 'Flashwing' },
              { name: 'Flashboat' },
            ],
          },
          {
            name: 'Lex Luthor',
            projects: [
              { name: 'Kryptonite' },
              { name: 'Fortress of Solitude' },
              { name: 'Supermobile' },
            ],
            dashboards: [
              { name: 'Kryptonite' },
              { name: 'Fortress of Solitude' },
              { name: 'Supermobile' },
            ],
          },
          {
            name: 'Joker',
            projects: [{ name: 'Jokermobile' }],
            dashboards: [{ name: 'Jokermobile' }],
          },
          {
            name: 'Wonder Woman',
            projects: [{ name: 'Invisible Jet' }],
            dashboards: [{ name: 'Invisible Jet' }],
          },
        ] as IClient[],
      },
      {
        id: 2,
        name: 'Marvel Universe',
        clients: [
          {
            name: 'Ironman',
            projects: [{ name: 'Ironman Suit' }],
            dashboards: [{ name: 'Ironman Suit' }],
          },
          { name: 'Captain America' },
          { name: 'Thor' },
          { name: 'Hulk' },
          { name: 'Black Widow' },
          { name: 'Hawkeye' },
        ] as IClient[],
      },
      {
        id: 3,
        name: 'Star Wars Universe',
        clients: [
          { name: 'Luke Skywalker' },
          { name: 'Darth Vader' },
          { name: 'Han Solo' },
          { name: 'Princess Leia' },
          { name: 'Obi-Wan Kenobi' },
          { name: 'Yoda' },
        ] as IClient[],
      },
      {
        id: 4,
        name: 'Star Trek Universe',
        clients: [
          { name: 'Captain Kirk' },
          { name: 'Spock' },
          { name: 'Dr. McCoy' },
          { name: 'Scotty' },
          { name: 'Uhura' },
          { name: 'Sulu' },
        ] as IClient[],
      },
      {
        id: 5,
        name: 'Harry Potter Universe',
        clients: [
          { name: 'Harry Potter' },
          { name: 'Hermione Granger' },
          { name: 'Ron Weasley' },
          { name: 'Albus Dumbledore' },
          { name: 'Severus Snape' },
          { name: 'Lord Voldemort' },
        ] as IClient[],
      },
      {
        id: 6,
        name: 'Lord of the Rings Universe',
        clients: [
          { name: 'Frodo Baggins' },
          { name: 'Gandalf' },
          { name: 'Aragorn' },
          { name: 'Legolas' },
          { name: 'Gimli' },
          { name: 'Sauron' },
        ] as IClient[],
      },
      {
        id: 7,
        name: 'Game of Thrones Universe',
        clients: [
          { name: 'Jon Snow' },
          { name: 'Daenerys Targaryen' },
          { name: 'Tyrion Lannister' },
          { name: 'Arya Stark' },
          { name: 'Cersei Lannister' },
          { name: 'Sansa Stark' },
        ] as IClient[],
      },
    ] as IOrganization[];
    const users = [
      {
        id: 1,
        name: 'Batman',
        email: 'batman@wayneenterprises.com',
        organizationIds: [1, 2],
      },
      {
        id: 2,
        name: 'Superman',
        email: 'superman@dailyplanet.com',
        organizationIds: [3, 4],
      },
      {
        id: 3,
        name: 'Flash',
        email: 'flash@lightningfast.com',
        organizationIds: [5, 6, 7],
      },
    ] as IUser[];

    const settings = [
      {
        id: 1,
        name: 'Setting 1',
        value: 'Setting 1 Value',
      },
      {
        id: 2,
        name: 'Setting 2',
        value: 'Setting 2 Value',
      },
      {
        id: 3,
        name: 'Setting 3',
        value: 'Setting 3 Value',
      },
    ] as ISetting[];
    //assign an id to each client
    let clientId = 1;
    organizations.forEach((organization) => {
      organization.clients.forEach((client: IClient) => {
        client.id = clientId++;
      });
    });
    const flattenedMenu = this.flattenMenu(menu);
    organizations.forEach((organization) => {
      organization.clients.forEach((client: IClient) => {
        client.menuIds = [];
        // randomly assign 1 to menus.length menus to each client
        const numMenus = Math.floor(Math.random() * flattenedMenu.length) + 1;
        for (let i = 0; i < numMenus; i++) {
          const menuIndex = Math.floor(Math.random() * flattenedMenu.length);
          client.menuIds.push(flattenedMenu[menuIndex].id);
        }
      });
    });
    // add clientIds to menu
    flattenedMenu.forEach((menuItem) => {
      menuItem.clientIds = [];
      organizations.forEach((organization) => {
        organization.clients.forEach((client: IClient) => {
          if (client.menuIds.includes(menuItem.id)) {
            menuItem.clientIds.push(client.id);
          }
        });
      });
    });
    return { menu, organizations, users, settings };
  }

  private flattenMenu(menu: IMenu[]) {
    const flattenedMenu = [];
    menu.forEach((menuItem) => {
      flattenedMenu.push(menuItem);
      if (menuItem.children) {
        const children = this.flattenMenu(menuItem.children);
        children.forEach((child) => {
          flattenedMenu.push(child);
        });
      }
    });
    return flattenedMenu;
  }
}
