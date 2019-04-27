import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title = 'Vendor Edit';
  vendor: Vendor;

  constructor(private router: Router, private route: ActivatedRoute, private vndrSvc: VendorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vndrSvc.get(params.id).subscribe(jr => {
        this.vendor = jr.data as Vendor;
      });
    });
  }

  edit() {
    this.vndrSvc.edit(this.vendor).subscribe(jr => {
      this.vendor = jr.data as Vendor;
      this.router.navigateByUrl('/vendor/list');
    });
  }

}
