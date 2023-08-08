import { Controller, Get, Params } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/projects')
export class ProjectsController {
  constructor(private dataContext: DataContext) {}
  @Get('/projects')
  async getProjects() {
    const organizations = await this.dataContext.organizations.find();
    const projects = organizations.map((organization) =>
      organization.clients.map((client) => client.projects)
    );
    return projects
      .flat(2)
      .filter((project) => project?.name != null && project.name !== '');
  }
  @Get('/project/:id')
  async getProject(@Params('id') id: string) {
    const organizations = await this.dataContext.organizations.find();
    const projects = organizations.map((organization) =>
      organization.clients.map((client) => client.projects)
    );
    const flattenedProjects = projects.flat(2);
    return flattenedProjects.find((project) => project.id === +id);
  }
}
