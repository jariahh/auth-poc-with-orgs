import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { IMenu } from '../../../../../../api/data/models/IMenu';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
})
export class AccessDeniedComponent implements OnInit {
  defaultPath: string[] = [];
  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {
    console.log('AccessDeniedComponent');
    console.log(this.router);
    this.defaultPath = this.getDefaultPath();
    this.menuService.menus$.subscribe(() => {
      this.defaultPath = this.getDefaultPath();
    });
  }

  private getDefaultPath() {
    // get the organization id and client id if they exist
    const organizationId = this.router.url.split('/')[1];
    const clientId = this.router.url.split('/')[2];
    //get the default menu items and build the default path
    const menu = this.menuService.menus$.value;
    const menuItems = this.getMenuFirstMenuPath(menu[0] as IMenu);

    if (organizationId && clientId) {
      return ['', organizationId, clientId, ...menuItems];
    }
    return [];
  }

  private getMenuFirstMenuPath(menu: IMenu) {
    if (!menu) return [];
    const menuItems = [menu.url];
    if (menu.children && menu.children.length > 0) {
      menuItems.push(...this.getMenuFirstMenuPath(menu.children[0]));
    }
    return menuItems;
  }
}
