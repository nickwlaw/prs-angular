import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = 'User List';
  users: User[];
  jr: JsonResponse;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(jr => {
      this.jr = jr;
      this.users = this.jr.data as User[];
    });
  }

}
