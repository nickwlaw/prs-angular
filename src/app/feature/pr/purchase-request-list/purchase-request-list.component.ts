import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  title = 'Purchase Requests';
  prs: PurchaseRequest[];
  sortCriteria = 'name';
  sortOrder = 'asc';
  loggedInUser: User;

  constructor(private sysSvc: SystemService, private prSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.prSvc.list().subscribe(jr => {
      this.prs = jr.data as PurchaseRequest[];
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
