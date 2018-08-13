import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  public testimonialid: String;
  public name: String;
  public description: String;
  public status: Boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
     this.testimonialid = params['testimonialid'];
     if (!this._validationsService.isEmpty(this.testimonialid)) {
      this.getTestimonialById(this.testimonialid);
     }
    });
  }

  getTestimonialById(testimonialid: any) {
    this.testimonialService.getTestimonialById(testimonialid)
    .subscribe(res => {
      this.name = res.data.name;
      this.description = res.data.description;
      this.status = res.data.status;
      this.testimonialid = res.data._id;
    });
  }

  testimonialForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Testimonial Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description should not be empty!');
      return false;
    }
    let fieldTestimonial;
    if (!this._validationsService.isEmpty(this.testimonialid)) {
      fieldTestimonial = {
        name: this.name,
        description: this.description,
        status: this.status,
        testimonialid: this.testimonialid
      };
    } else {
      fieldTestimonial = {
        name: this.name,
        description: this.description,
        status: this.status
      };
    }

    this.testimonialService.addTestimonial(fieldTestimonial)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.description = '';
        this.status = false;
        this._commonService.redirectTo('/admin/testimonial/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }
}
