import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqSubCategoryService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addFaqSubCategory(newFaqSubCategory: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/faqSubCategories/`, newFaqSubCategory, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqSubCategory() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqSubCategories/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteFaqSubCategory(FaqSubCategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/faqSubCategories/${FaqSubCategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqSubCategoryById(FaqSubCategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqSubCategories/${FaqSubCategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFaqSubCategoryByCategory(FaqCategoryid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/faqSubCategories/list/${FaqCategoryid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
