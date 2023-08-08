import { Injectable } from '@angular/core';
import { IMenu } from '../models/IMenu';
import { defaultRoutes } from '../app.routes';
import { ActivatedRoute, Route, Router } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { moduleMap } from '@auth-poc-with-orgs/pages/src/app/components/moduleMap';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private currentUrl = '';
  menus$ = new BehaviorSubject<IMenu[]>([]);
  constructor(private router: Router, private httpClient: HttpClient) {}
  async loadMenu(
    organizationId: string,
    clientId: string,
    activatedRoute: ActivatedRoute
  ) {
    if (!this.router.url.endsWith('loading')) {
      this.currentUrl = this.router.url;
    }
    await this.router.navigate([organizationId, clientId, 'loading'], {
      relativeTo: activatedRoute,
    });
    this.httpClient
      .get<IMenu[]>(`/api/menus/menuByClient/${clientId}`)
      .subscribe(async (menus) => {
        this.menus$.next(menus);
        const menuRoutes = menus.map((menu) => this.getMenuItem(menu));
        defaultRoutes.forEach((route) => {
          menuRoutes.push(route);
        });

        activatedRoute.routeConfig?.children?.forEach((route) => {
          if (!route.children) {
            route.children = [];
          }
          route.children = menuRoutes;
        });
        setTimeout(async () => {
          console.log(
            'now that loading is complete, lets reload the requested url',
            this.currentUrl
          );
          await this.router.navigateByUrl(this.currentUrl);
        }, 10);
      });
  }
  private getMenuItem(menu: IMenu): Route {
    if (menu.children?.length > 0) {
      if (menu.modules != null)
        return {
          path: menu.url,
          children: menu.children.map((childMenu) =>
            this.getMenuItem(childMenu)
          ),
          loadChildren: this.getModule(menu.modules),
        } as Route;
      return {
        path: menu.url,
        children: menu.children.map((childMenu) => this.getMenuItem(childMenu)),
      } as Route;
    }
    return {
      path: menu.url,
      loadChildren: this.getModule(menu.modules),
    } as Route;
  }

  private getModule(moduleName: string) {
    return moduleMap.get(moduleName);
  }
}
