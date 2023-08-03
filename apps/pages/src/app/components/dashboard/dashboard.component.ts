import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'auth-poc-with-orgs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards: any[] = [];
  displayedColumns: string[] = ['id', 'name'];
  displayedColumnsActions: string[] = [...this.displayedColumns, 'actions'];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient
      .get<any[]>('/api/dashboards/dashboards')
      .subscribe((dashboard) => {
        this.dashboards = dashboard;
      });
  }
  add() {}
  edit(element: any) {}
  delete(element: any) {}
}
