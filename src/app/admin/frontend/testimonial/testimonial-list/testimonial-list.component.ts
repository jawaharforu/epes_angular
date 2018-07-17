import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss']
})
export class TestimonialListComponent implements OnInit {

  public testimonialList: any;

  constructor(
    private _commonService: CommonService,
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {
    this.getTestimonialList();
  }

  getTestimonialList() {
    this.testimonialService.getTestimonial()
    .subscribe(res => {
      this.testimonialList = res.data;
    });
  }

  editTestimonial(testimonial: any) {
    this._commonService.redirectTo(`/admin/testimonial/edit/${testimonial._id}`);
  }

  updateStatus(event: boolean, c: any) {
    const fieldTestimonial = {
      name: c.name,
      description: c.description,
      status: event,
      testimonialid: c.testimonialid
    };
    this.testimonialService.addTestimonial(fieldTestimonial)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  deleteTestimonial(testimonialid: any) {
    this.testimonialService.deleteTestimonial(testimonialid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getTestimonialList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
