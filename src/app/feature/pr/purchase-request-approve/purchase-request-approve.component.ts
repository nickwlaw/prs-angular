import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.class';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { SystemService } from '../../../service/system.service';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';

@Component({
  selector: 'app-purchase-request-approve',
  templateUrl: './purchase-request-approve.component.html',
  styleUrls: ['./purchase-request-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {
  title = 'Purchase Request Approve';
  user: User;
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];

  constructor(private route: ActivatedRoute, private router: Router, private sysSvc: SystemService,
              private prSvc: PurchaseRequestService, private prliSvc: PurchaseRequestLineItemService) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(prjr => {
        this.pr = prjr.data as PurchaseRequest;
        this.prliSvc.listByPurchaseRequest(this.pr.id.toString()).subscribe(prlijr => {
          this.prlis = prlijr.data as PurchaseRequestLineItem[];
        });
      });
    });
  }

  approve() {
    this.prSvc.approve(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }

  reject() {
    console.log('reject component');
    this.prSvc.reject(this.pr).subscribe(jr => {
      console.log('reject service');
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    })
  }
}
