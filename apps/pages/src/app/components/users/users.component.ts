import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'auth-poc-with-orgs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  displayedColumns: string[] = ['id', 'name', 'email'];
  displayedColumnsActions: string[] = [...this.displayedColumns, 'actions'];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<IUser[]>('/api/users/users').subscribe((users) => {
      this.users = users;
    });
  }

  editUser(user: IUser) {}

  deleteUser(user: IUser) {}

  addUser() {}
}
