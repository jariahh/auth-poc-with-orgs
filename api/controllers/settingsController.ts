import { Controller, Get, Params } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/settings')
export class SettingsController {
  constructor(private dataContext: DataContext) {}
  @Get('/settings')
  getSettings() {
    return this.dataContext.settings;
  }
  @Get('/setting/:id')
  getSetting(@Params('id') id: string) {
    return this.dataContext.settings.find((setting) => setting.id === +id);
  }
}
