import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: any;
  user: User = new User(0, '', '', '', '', '', '', false, false, false);
  jr: JsonResponse;

  login() {
    this.userSvc.login(this.user).subscribe(jresp => {
      this.jr = jresp;
      if (this.jr.errors == null) {
        this.user = this.jr.data as User;
        this.sysSvc.data.user.instance = this.user;
        this.sysSvc.data.user.loggedIn = true;
        this.router.navigateByUrl('/purchase-request/list');
      } else {
        this.message = this.jr.errors;
      }
    });
  }

  constructor(private userSvc: UserService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
    this.user.password = 'password';
  }

}
