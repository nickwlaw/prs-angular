import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'User List';
  users: User[];

  constructor(private usrSvc: UserService) { }

  ngOnInit() {
    this.usrSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
    });
  }
}
