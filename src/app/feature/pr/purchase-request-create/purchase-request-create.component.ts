import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { User } from '../../../model/user.class';
import { SystemService } from '../../../service/system.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  title = 'Purchase Request Create';
  user: User;
  pr: PurchaseRequest;

  constructor(private router: Router, private sysSvc: SystemService, private prSvc: PurchaseRequestService) { }

  ngOnInit() {
  }

  create() {
    this.prSvc.create(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }

}
