import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarOpen = false;
  menuItems: Menu[] = [
    new Menu('User', '/user/list', 'This is the user menu item'),
    new Menu('Vendor', '/vendor/list', 'This is the vendor menu item'),
    new Menu('Product', '/product/list', 'This is the product menu item'),
    new Menu('Request', '/purchaserequest/list', 'This is the pr menu item'),
    new Menu('Review', '/purchaserequest/review', 'This is the pr review menu item'),
    new Menu('Login', '/user/login', 'This is the login menu item'),
    new Menu('About', '/about', 'This is the about menu item')
  ];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
