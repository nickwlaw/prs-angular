import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';

@Component({
  selector: 'app-purchase-request-line-item-edit',
  templateUrl: './purchase-request-line-item-edit.component.html',
  styleUrls: ['./purchase-request-line-item-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  title = 'Line Item Edit';
  prli: PurchaseRequestLineItem;

  constructor(private route: ActivatedRoute, private router: Router, private prliSvc: PurchaseRequestLineItemService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prliSvc.get(params.id).subscribe(jr => {
        this.prli = jr.data as PurchaseRequestLineItem;
      });
    });
  }

  edit() {
    this.prliSvc.edit(this.prli).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.router.navigateByUrl('/purchase-request/lines/' + this.prli.purchaseRequest.id);
    });
  }

  remove() {
    this.prliSvc.delete(this.prli.id).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.router.navigateByUrl('/purchase-request/lines/' + this.prli.purchaseRequest.id);
    });
  }
}
