import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqCategoryService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addFaqCategory(newFaqCategory: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/faqCategories/`, newFaqCategory, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqCategory() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqCategories/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteFaqCategory(FaqCategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/faqCategories/${FaqCategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqCategoryById(FaqCategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqCategories/${FaqCategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqCategoryByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/faqCategories/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
