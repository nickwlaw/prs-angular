import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.class';
import { SystemService } from '../../service/system.service';
import { User } from '../../model/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User;
  navbarOpen = false;
  menuItems: Menu[] = [
    new Menu('About', '/about', 'This is the about menu item'),
    new Menu('User', '/user/list', 'This is the user menu item'),
    new Menu('Vendor', '/vendor/list', 'This is the vendor menu item'),
    new Menu('Product', '/product/list', 'This is the product menu item'),
    new Menu('Request', '/purchase-request/list', 'This is the pr menu item'),
    // new Menu('Review', '/purchase-request/review', 'This is the pr review menu item'),
    // new Menu('Login', '/user/login', 'This is the login menu item'),
  ];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
    if (this.sysSvc.data.user.loggedIn) {
      this.user = this.sysSvc.data.user.instance;
    }
  }
}
