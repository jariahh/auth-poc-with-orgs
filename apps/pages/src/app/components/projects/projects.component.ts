import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'auth-poc-with-orgs-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  displayedColumnsActions: string[] = [...this.displayedColumns, 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient
      .get<any[]>('/api/projects/projects')
      .subscribe((projects) => {
        this.dataSource.data = projects;
      });
  }
  add() {}
  edit(element: any) {}
  delete(element: any) {}
}
