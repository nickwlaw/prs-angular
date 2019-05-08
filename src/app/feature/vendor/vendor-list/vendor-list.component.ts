import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  title = 'Vendor List';
  vendors: Vendor[];
  loggedInUser: User;

  constructor(private vndrSvc: VendorService, private sysSvc: SystemService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.data.user.instance;
    this.vndrSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
    });
  }
}
