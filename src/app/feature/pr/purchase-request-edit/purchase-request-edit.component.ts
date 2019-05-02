import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  title = 'Purchase Request Edit';
  pr: PurchaseRequest;

  constructor(private route: ActivatedRoute, private router: Router, private prSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
      });
    });
  }

  edit() {
    this.prSvc.edit(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }
}
