import { Component, OnInit } from '@angular/core';
import { UserService } from '@auth-poc-with-orgs/authentication';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from './models/IClient';
import { IOrganization } from './models/IOrganization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-shell';
  showSideNav = true;
  clients: IClient[] = [];
  client: IClient | null = null;
  organizations: IOrganization[] = [];
  organization: IOrganization | null = null;
  constructor(
    public userService: UserService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  logout() {
    this.userService.logout();
  }

  async changeClient(value: IClient) {
    this.client = value;
    await this.updateUrl(
      this.organization?.id ?? '',
      this.client?.id.toString()
    );
  }
  getClientId() {
    // get the clientId from the url which is the second segment of the url
    const urlSegments = this.router.url.split('/');
    const clientId = urlSegments[2];
    return clientId;
  }
  getOrganizationId() {
    // get the organizationId from the url which is the first segment of the url
    const urlSegments = this.router.url.split('/');
    const organizationId = urlSegments[1];
    return organizationId;
  }
  ngOnInit(): void {
    this.httpClient
      .get<IOrganization[]>('/api/organizations/organizations')
      .subscribe((organizations) => {
        this.organizations = organizations;
        const organizationId = this.getOrganizationId();
        if (organizationId) {
          const organization = organizations.find(
            (value) => value.id.toString() === organizationId
          );
          if (organization) {
            this.changeOrganization(organization);
          } else {
            this.changeOrganization(organizations[0]);
          }
        } else {
          this.changeOrganization(organizations[0]);
        }
      });
  }

  async changeOrganization(value: IOrganization) {
    this.organization = value;
    const clientId = this.getClientId();
    await this.updateUrl(this.organization?.id, clientId?.toString());
    this.getClients();
  }

  private getClients() {
    this.httpClient
      .get<IClient[]>(
        '/api/clients/clientsByOrganization/' + this.organization?.id
      )
      .subscribe((clients) => {
        this.clients = clients;
        const clientId = this.getClientId();
        if (clientId) {
          const client = clients.find(
            (value) => value.id.toString() === clientId
          );
          if (client) {
            this.changeClient(client);
          } else {
            this.changeClient(clients[0]);
          }
        } else {
          this.changeClient(clients[0]);
        }
      });
  }

  private async updateUrl(organizationId: string, clientId: string) {
    //get url and split it into an array of strings and remove the first 2 elements
    const url = this.router.url
      .split('/')
      .filter((p) => p != null && p !== '')
      .slice(2);
    const urlPath = [organizationId, clientId, ...url];
    // remove any empty strings or nulls from the array
    const urlPathCleaned = urlPath.filter((value) => value);
    // update the url with the new organization id and client id
    try {
      await this.router.navigate(
        urlPathCleaned.map((p) => p?.toString()),
        {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
