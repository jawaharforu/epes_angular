import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addTestimonial(newTestimonial: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/testimonials/`, newTestimonial, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTestimonial() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/testimonials/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteTestimonial(testimonialid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/testimonials/${testimonialid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTestimonialById(testimonialid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/testimonials/${testimonialid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTestimonialByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/testimonials/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
