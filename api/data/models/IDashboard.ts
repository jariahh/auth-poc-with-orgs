import { IDashboardWidget } from './IDashboardWidget';

export interface IDashboard {
  id: number;
  name: string;
  description: string;
  dashboardData?: IDashboardWidget[];
}
