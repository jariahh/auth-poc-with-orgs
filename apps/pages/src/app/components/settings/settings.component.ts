import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'auth-poc-with-orgs-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settings: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'icon', 'url'];
  displayedColumnsActions: string[] = [...this.displayedColumns, 'actions'];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient
      .get<any[]>('/api/settings/settings')
      .subscribe((settings) => {
        this.settings = settings;
      });
  }

  add() {}

  edit(element: any) {}

  delete(element: any) {}
}
