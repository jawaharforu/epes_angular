import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addFaq(newFaq: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/faqs/`, newFaq, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaq() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqs/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteFaq(Faqid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/faqs/${Faqid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqById(Faqid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqs/${Faqid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqByCategory(faqcategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/faqs/category/${faqcategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
