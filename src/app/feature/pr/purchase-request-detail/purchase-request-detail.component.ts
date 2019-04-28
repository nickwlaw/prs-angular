import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title = 'Purchase Request Detail';
  pr: PurchaseRequest;

  constructor(private router: Router, private route: ActivatedRoute, private prSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
      });
    });
  }

  remove() {
    this.prSvc.delete(this.pr.id).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      if (this.pr) {
        alert('Purchase request successfully deleted.');
      } else {
        alert('There was an error deleting the purchase request.');
      }
      this.router.navigateByUrl('/purchase-request/list');
    });
  }
}
