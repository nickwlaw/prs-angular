import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "What is the Purchase Request System? (PRS)"

  constructor() { }

  ngOnInit() {
  }

}
