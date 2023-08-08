import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IOrganization } from '../../models/IOrganization';
import { IClient } from '../../models/IClient';
import { BehaviorSubject, combineLatest, filter } from 'rxjs';
import { IMenu } from '../../models/IMenu';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';

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
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
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

        this.menuService.loadMenu(
          this.organizationId,
          this.clientId,
          this.activatedRoute
        );
      });
    this.menuService.menus$.subscribe((menus) => {
      this.menus = menus;
      setTimeout(() => {
        this.changeDetectorRef.detectChanges();
      }, 100);
    });
  }
}
