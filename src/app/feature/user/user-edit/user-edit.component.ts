import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
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

  constructor(private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms.id);
    console.log('user edit ngOnInit', 'id = ' + this.id);
    this.userSvc.get(this.id).subscribe(jr => {
        console.log('1');
        this.user = jr.data as User;
        console.log('user', this.user);
      });
  }

  edit() {
    this.userSvc.edit(this.user).subscribe(jr => {
      this.router.navigate(['/user/list']);
      this.user = jr.data as User;
      console.log(this.user);
    });
  }

}
