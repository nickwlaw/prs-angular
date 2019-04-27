import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = 'Product Detail';
  product: Product;

  constructor(private router: Router, private route: ActivatedRoute, private prdSvc: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prdSvc.get(params.id).subscribe(jr => {
        this.product = jr.data as Product;
      });
    });
  }

  remove() {
    this.prdSvc.delete(this.product.id).subscribe(jr => {
      this.product = jr.data as Product;
      if (this.product) {
        alert(this.product.name = ' was successfully deleted.');
      } else {
        alert('There was an error deleting the product.');
      }
      this.router.navigateByUrl('/product/list');
    });
  }

}
