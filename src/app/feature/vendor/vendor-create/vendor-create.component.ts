import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title = 'Vendor Create';
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', true);

  create() {
    this.vndrSvc.create(this.vendor).subscribe(jr => {
      this.router.navigate(['/vendor/list']);
      this.vendor = jr.data as Vendor;
      console.log(this.vendor);
    });
  }

  constructor(private vndrSvc: VendorService, private router: Router) { }

  ngOnInit() {
  }

}
