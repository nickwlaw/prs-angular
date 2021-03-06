import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title = 'User Edit';
  id: string;
  user: User;
  loggedInUser: User;

  constructor(private sysSvc: SystemService, private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.route.params.subscribe(params => this.id = params.id);
    this.userSvc.get(this.id).subscribe(jr => {
      this.user = jr.data as User;
    });
  }

  edit() {
    this.userSvc.edit(this.user).subscribe(jr => {
      this.user = jr.data as User;
      this.router.navigate(['/user/list']);
    });
  }

}
