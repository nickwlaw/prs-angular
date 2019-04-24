import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title = 'User Detail';
  user: User;

  constructor(private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        const id = parms.id;
        this.getUserById(id);
      });
  }

  getUserById(id: string) {
    this.userSvc.get(id).subscribe(jr => {
      this.user = jr.data as User;
    });
  }

  remove(): void {
    this.userSvc.delete(this.user.id).subscribe(jr => {
      this.router.navigateByUrl('/user/list');
      this.user = jr.data as User;
      console.log(this.user);
    });
  }
}
