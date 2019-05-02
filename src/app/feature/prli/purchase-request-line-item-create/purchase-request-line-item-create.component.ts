import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';
import { Product } from '../../../model/product.class';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { ProductService } from '../../../service/product.service';
import { PurchaseRequestService } from '../../../service/purchase-request.service';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title = 'Line Item Create';
  product: Product;
  products: Product[];
  pr: PurchaseRequest;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.pr, this.product, 0);

  constructor(private route: ActivatedRoute, private router: Router, private prSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService, private prodSvc: ProductService) { }

  ngOnInit() {
    this.prodSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
    });
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
        this.prli.purchaseRequest = this.pr;
      });
    });
  }

  create() {
    this.prliSvc.create(this.prli).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.route.params.subscribe(params => {
        this.router.navigateByUrl('purchase-request/lines/' + params.id);
      });
    });
  }
}
