import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title = 'Vendor Detail';
  vendor: Vendor;

  constructor(private router: Router, private route: ActivatedRoute, private vndrSvc: VendorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vndrSvc.get(params.id).subscribe(jr => {
        this.vendor = jr.data as Vendor;
      });
    });
  }

  remove(): void {
    this.vndrSvc.delete(this.vendor.id).subscribe(jr => {
      this.vendor = jr.data as Vendor;
      if (this.vendor) {
        alert(this.vendor.name + ' has successfully been deleted.');
      } else {
        alert('There was an error deleting the vendor');
      }
      this.router.navigateByUrl('/vendor/list');
    });
  }

}
