import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product.class';
import { User } from '../../../model/user.class';
import { SystemService } from '../../../service/system.service';
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
  loggedInUser: User;

  constructor(private sysSvc: SystemService, private prodSvc: ProductService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.prodSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
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
