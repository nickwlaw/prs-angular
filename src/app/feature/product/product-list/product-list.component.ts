import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  products: Product[];
  sortCriteria = 'name';
  sortOrder = 'asc';

  constructor(private prodSvc: ProductService) { }

  ngOnInit() {
    this.prodSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
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
