import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  title = 'Purchase Request Review';
  prs: PurchaseRequest[];
  sortCriteria = 'name';
  sortOrder = 'asc';
  user: User;

  constructor(private prSvc: PurchaseRequestService, private sysSvc: SystemService) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.prSvc.listForReview(this.user.id.toString()).subscribe(jr => {
      this.prs = jr.data as PurchaseRequest[];
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
