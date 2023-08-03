import { Component, Input, OnInit } from '@angular/core';
import { IOrganization } from '../../models/IOrganization';
import { IClient } from '../../models/IClient';
import { BehaviorSubject, combineLatest, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMenu } from '../../models/IMenu';
import { ActivatedRoute, Route, Router } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { moduleMap } from '@auth-poc-with-orgs/pages/src/app/components/moduleMap';
import { LoadingComponent } from '@app-shell/src/app/components/loading/loading.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: IMenu[] = [];
  organizationId = '';
  clientId = '';
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  organization$ = new BehaviorSubject<IOrganization | null>(null);
  client$ = new BehaviorSubject<IClient | null>(null);

  @Input() set organization(value: IOrganization | null) {
    this.organization$.next(value);
  }

  @Input() set client(value: IClient | null) {
    this.client$.next(value);
  }
  ngOnInit() {
    combineLatest([this.organization$, this.client$])
      .pipe(filter(([organization, client]) => !!organization && !!client))
      .subscribe(([organization, client]) => {
        // get the organization id and client id
        this.organizationId = organization?.id ?? '';
        this.clientId = client?.id ?? '';

        this.loadMenu(this.organizationId, this.clientId);
      });
  }

  private loadMenu(organizationId: string, clientId: string) {
    this.httpClient
      .get<IMenu[]>(`/api/menus/menuByClient/${clientId}`)
      .subscribe(async (menus) => {
        this.menus = menus;
        const menuRoutes = menus.map((menu) => this.getMenuItem(menu));
        menuRoutes.push({
          path: 'loading',
          component: LoadingComponent,
        } as Route);
        // add a default '**' route redirecting to the first menu
        menuRoutes.push({
          path: '**',
          redirectTo: menuRoutes[0].path,
        });

        this.activatedRoute.routeConfig?.children?.forEach((route) => {
          if (!route.children) {
            route.children = [];
          }
          route.children = menuRoutes;
        });
        // reload the route
        const currentUrl = this.router.url;
        // navigate to the ./loading route relative to the current route
        await this.router.navigate(['loading'], {
          relativeTo: this.activatedRoute,
        });
        setTimeout(async () => {
          await this.router.navigateByUrl(currentUrl);
        });
      });
  }
  private getMenuItem(menu: IMenu): Route {
    return {
      path: menu.url,
      loadChildren: this.getModule(menu.modules),
    } as Route;
  }

  private getModule(moduleName: string) {
    return moduleMap.get(moduleName);
  }
}
