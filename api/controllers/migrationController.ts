import { Controller, Get } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/migration')
export class MigrationController {
  constructor(private dataContext: DataContext) {}

  @Get('/migration')
  async migration() {
    try {
      // truncate all collections
      await this.dataContext.menus.truncate();
      await this.dataContext.settings.truncate();
      await this.dataContext.users.truncate();
      await this.dataContext.organizations.truncate();
      //get seed data
      const seedData = this.dataContext.seedData();
      // create data to insert
      await this.dataContext.menus.insertMany(seedData.menu);
      await this.dataContext.settings.insertMany(seedData.settings);
      await this.dataContext.users.insertMany(seedData.users);
      await this.dataContext.organizations.insertMany(seedData.organizations);
      return 'Migration completed';
    } catch (error) {
      console.log(error);
      return 'Migration failed' + error;
    }
  }
}
