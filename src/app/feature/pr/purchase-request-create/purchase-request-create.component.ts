import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { User } from '../../../model/user.class';
import { SystemService } from '../../../service/system.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  title = 'Purchase Request Create';
  user: User;
  pr: PurchaseRequest;
  date: Date;

  constructor(
    private router: Router,
    private sysSvc: SystemService,
    private prSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.pr = new PurchaseRequest(0, this.user, '', '', this.date, '', 'New', 0.0, new Date(), '');
  }

  create() {
    this.prSvc.create(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }
}
