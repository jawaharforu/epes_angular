import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  video = "../../../assets/img/file.mp4";

 /* title = "Sed perspiciatis \" unde omnis";
  description = "<strong>Lorem</strong> Ipsum perspiciatis";
  sample_text = "Tempora, placeat ratione porro voluptate odit minima.";*/

  constructor() { }

  ngOnInit() {
  }

}
