import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title = 'User Create';
  user: User = new User(0, '', '', '', '', '', '', false, false, true);

  create() {
    this.userSvc.create(this.user).subscribe(jr => {
      this.router.navigate(['/user/list']);
      this.user = jr.data as User;
      this.user.isActive = true;
      console.log(this.user);
    });
  }
  constructor(private userSvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
