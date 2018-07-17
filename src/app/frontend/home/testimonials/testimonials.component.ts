import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../../admin/frontend/testimonial/testimonial.service';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public testimonialList: any;

  constructor(
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {
    this.getTestimonialList();
  }

  getTestimonialList() {
    this.testimonialService.getTestimonialByStatus()
    .subscribe(res => {
      this.testimonialList = res.data;
    });
  }

}
