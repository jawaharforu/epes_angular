import { Component, OnInit } from '@angular/core';
import { OrganogramService } from './organogram.service';

@Component({
  selector: 'app-organogram',
  templateUrl: './organogram.component.html',
  styleUrls: ['./organogram.component.scss']
})
export class OrganogramComponent implements OnInit {

  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'CEO',
    subordinates: [
        {
            name: 'Matthew Wikes',
            designation: 'VP',
            subordinates: [
                {
                    name: 'Tina Landry',
                    designation: 'Budget Analyst',
                    subordinates: []
                }

            ]
        },
        {
            name: 'Patricia Lyons',
            designation: 'VP',
            subordinates: [
                {
                    name: 'Dylan Wilson',
                    designation: 'Web Manager',
                    subordinates: []
                },
                {
                    name: 'Deb Curtis',
                    designation: 'Art Director',
                    subordinates: []
                }
            ]
        },
        {
            name: 'Larry Phung',
            designation: 'VP',
            subordinates: []
        }
    ]
  };
  public organogramStructure: any= {};
  public org: any[] = [];

  constructor(
    private organogramService: OrganogramService
  ) { }

  ngOnInit() {
    this.getOrganogramById('parent');
  }

  getOrganogramById(which: any) {
    this.organogramService.getOrganogram(which)
    .subscribe(res => {
      let j = 1;
      for (const prop of res.data) {
        this.org.push({
          name: prop.name,
          designation: prop.department,
          subordinates: []
        });
        if (j === res.data.length) {
          Object.assign(this.organogramStructure, this.org);
        }
        j++;
      }
    });
  }

}
