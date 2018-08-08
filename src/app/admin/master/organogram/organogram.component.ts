import { Component, OnInit } from '@angular/core';
import { OrganogramService } from './organogram.service';

@Component({
  selector: 'app-organogram',
  templateUrl: './organogram.component.html',
  styleUrls: ['./organogram.component.scss']
})
export class OrganogramComponent implements OnInit {

  public organogramStructure: any;

  constructor(
    private organogramService: OrganogramService
  ) { }

  ngOnInit() {
    this.getOrganogramStructure();
  }

  getOrganogramStructure() {
    this.organogramService.getOrganogramStructure()
    .subscribe(res => {
      const data = res.data;
      this.organogramStructure = data;
    });
  }

}
