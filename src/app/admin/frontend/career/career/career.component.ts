import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';
import { ValidationsService } from '../../../../services/validations.service';
import { CommonService } from '../../../../services/common.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  public careerid: String = '';
  public name: String = '';
  public description: String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private careerService: CareerService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.careerid = params['careerid'];
      if (!this._validationsService.isEmpty(this.careerid)) {
        this.getCareerById(this.careerid);
      }
    });
  } 

  getCareerById(careerid: any) {
    this.careerService.getCareerById(careerid)
    .subscribe(res => {
      this.name = res.data.name;
      this.description = res.data.description;
      this.careerid = res.data._id;
    });
  }
   
  careerForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Career Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description should not be empty!');
      return false;
    }
    
    let fieldcareerid;
    if (!this._validationsService.isEmpty(this.careerid)) {
      fieldcareerid = {
        name: this.name,
        description: this.description,
        careerid: this.careerid
      };
    } else {
      fieldcareerid = {
        name: this.name,
        description: this.description
      }; 
    }
    this.careerService.addCareer(fieldcareerid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.description = '';
        this._commonService.redirectTo('/admin/career/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
