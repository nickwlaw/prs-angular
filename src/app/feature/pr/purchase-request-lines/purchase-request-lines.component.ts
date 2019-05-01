import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title = 'Purchase Request';
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];

  constructor(private prSvc: PurchaseRequestService, private prliSvc: PurchaseRequestLineItemService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(prjr => {
        this.pr = prjr.data as PurchaseRequest;
        this.prliSvc.listByPurchaseRequest(this.pr.id.toString()).subscribe(prlijr => {
          this.prlis = prlijr.data as PurchaseRequestLineItem[];
          console.log(this.prlis);
        });
      });
    });
  }
}
