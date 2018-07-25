import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../admin/frontend/career/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  careersList: any;

  constructor(
    private careerService: CareerService
  ) { }

  ngOnInit() {
    this.getCareer();
  }

  getCareer(){
    this.careerService.getCareerByStatus()
    .subscribe(res => {
    this.careersList = res.data;
    console.log(res.data);
    /*let j = 0;
    for (const prop of res.data) {
        if ( j === 0 ) {
        this.getFaqByCategory(prop._id);
        }
        j++;
    }*/ 
    });
  }
 
}
