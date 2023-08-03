import { Controller, Get, Params } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/dashboards')
export class DashboardController {
  constructor(private dataContext: DataContext) {}
  @Get('/dashboard/:id')
  getDashboard(@Params('id') id: string) {
    const dashboard = this.dataContext.dashboards.find(
      (dashboard) => dashboard.id === +id
    );
    dashboard.dashboardData = this.dataContext.dashboardWidgets.filter(
      (dashboardData) => dashboardData.dashboard === +id
    );
    return dashboard;
  }
  @Get('/dashboards')
  getDashboards() {
    return this.dataContext.dashboards;
  }
}
