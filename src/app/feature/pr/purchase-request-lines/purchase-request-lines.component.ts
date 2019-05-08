import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.class';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title = 'Purchase Request';
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];
  user: User;

  constructor(private prSvc: PurchaseRequestService, private prliSvc: PurchaseRequestLineItemService, private sysSvc: SystemService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.prSvc.get(params.id).subscribe(prjr => {
          this.pr = prjr.data as PurchaseRequest;
          console.log(this.pr);
          this.prliSvc.listByPurchaseRequest(this.pr.id.toString()).subscribe(prlijr => {
            this.prlis = prlijr.data as PurchaseRequestLineItem[];
            console.log(this.prlis);
          });
        });
      }
      if (params.pr && params.prli) {
        this.prliSvc.delete(params.prli).subscribe(jr => {
          this.router.navigateByUrl('/purchase-request/lines/' + params.pr);
        });
      }
    });
  }

  submit() {
    this.prSvc.submitReview(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }

  reopen() {
    this.prSvc.reopen(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/lines/' + this.pr.id);
    });
  }
}
