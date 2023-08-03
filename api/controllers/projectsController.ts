import { Controller, Get, Params } from '@decorators/express';
import { DataContext } from '../data/context';

@Controller('/projects')
export class ProjectsController {
  constructor(private dataContext: DataContext) {}
  @Get('/projects')
  getProjects() {
    return this.dataContext.projects;
  }
  @Get('/project/:id')
  getProject(@Params('id') id: string) {
    return this.dataContext.projects.find((project) => project.id === +id);
  }
}
