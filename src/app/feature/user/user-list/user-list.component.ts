import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'User List';
  loggedInUser: User;
  users: User[];
  sortCriteria = 'userName';
  sortOrder = 'asc';

  constructor(private usrSvc: UserService, private sysSvc: SystemService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.usrSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
