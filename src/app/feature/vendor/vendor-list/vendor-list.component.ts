import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  title = 'Vendor List';
  vendors: Vendor[];

  constructor(private vndrSvc: VendorService) { }

  ngOnInit() {
    this.vndrSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
    });
  }
}
