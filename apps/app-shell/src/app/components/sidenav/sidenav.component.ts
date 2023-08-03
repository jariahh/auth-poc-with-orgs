import { Component, Input, OnInit } from '@angular/core';
import { IOrganization } from '../../models/IOrganization';
import { IClient } from '../../models/IClient';
import { BehaviorSubject, combineLatest, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMenu } from '../../models/IMenu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: IMenu[] = [];
  organizationId = '';
  clientId = '';
  constructor(private httpClient: HttpClient) {}
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
        console.log(organization, client);
        // get the organization id and client id
        this.organizationId = organization?.id ?? '';
        this.clientId = client?.id ?? '';

        this.loadMenu(this.organizationId, this.clientId);
      });
  }

  private loadMenu(organizationId: string, clientId: string) {
    this.httpClient
      .get<IMenu[]>(`/api/menus/menuByClient/${clientId}`)
      .subscribe((menus) => {
        console.log(menus);
        this.menus = menus;
      });
  }
}
