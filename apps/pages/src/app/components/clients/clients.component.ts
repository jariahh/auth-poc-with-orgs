import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'auth-poc-with-orgs-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  displayedColumnsActions: string[] = [...this.displayedColumns, 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<any[]>('/api/clients/clients').subscribe((clients) => {
      this.dataSource.data = clients;
    });
  }
  add() {}
  edit(element: any) {}
  delete(element: any) {}
}
