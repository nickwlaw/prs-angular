import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title = 'Purchase Request Detail';
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];
  loggedInUser: User;

  constructor(private router: Router, private route: ActivatedRoute,
    private prliSvc: PurchaseRequestLineItemService, private sysSvc: SystemService, private prSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
        this.prliSvc.listByPurchaseRequest(params.id).subscribe(jr => {
          this.prlis = jr.data as PurchaseRequestLineItem[];
        });
      });
    });
  }

  remove() {
    if (this.prlis.length >= 1) {
      for (const prli of this.prlis) {
        console.log('Deleting prlis');
        this.prliSvc.delete(prli.id).subscribe(jr => {
          if (this.prlis.length <= 1 || !this.prlis) {
            console.log('Deleting pr');
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
        });
      }
    }
    if (this.prlis.length === 0 || !this.prlis) {
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
}
