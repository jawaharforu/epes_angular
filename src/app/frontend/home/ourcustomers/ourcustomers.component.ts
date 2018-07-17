import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourcustomers',
  templateUrl: './ourcustomers.component.html',
  styleUrls: ['./ourcustomers.component.scss']
})
export class OurcustomersComponent implements OnInit {

  title = "Our Customers";
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus.";

  constructor() { }

  ngOnInit() {
  }

}
