import { Controller, Get, Params } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/dashboards')
export class DashboardController {
  constructor(private dataContext: DataContext) {}
  @Get('/dashboard/:id')
  async getDashboard(@Params('id') id: string) {
    const organizations = await this.dataContext.organizations.find();
    const dashboards = organizations.map((organization) =>
      organization.clients.map((client) => client.dashboards)
    );
    const flattenedDashboards = dashboards.flat(2);
    return flattenedDashboards.find((dashboard) => dashboard.id === +id);
  }
  @Get('/dashboards')
  async getDashboards() {
    const organizations = await this.dataContext.organizations.find();
    const dashboards = organizations.map((organization) =>
      organization.clients.map((client) => client.dashboards)
    );
    // flatten the array of arrays and filter out any dashboards that don't have a name
    return dashboards
      .flat(2)
      .filter((dashboard) => dashboard?.name != null && dashboard.name !== '');
  }
}
