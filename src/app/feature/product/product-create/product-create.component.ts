import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = 'Product Create';
  vendor: Vendor = new Vendor(0, '', 'Loading...', '', '', '', '', '', '', true);
  product: Product = new Product(0, this.vendor, '', '', 0, '', '');
  vendors: Vendor[] = [this.vendor];

  create() {
    this.prodSvc.create(this.product).subscribe(jr => {
      this.router.navigate(['/product/list']);
      this.product = jr.data as Product;
      console.log(this.product);
    });
  }

  constructor(private prodSvc: ProductService, private vndrSvc: VendorService, private router: Router) { }

  ngOnInit() {
    this.vndrSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
    });
  }

}
