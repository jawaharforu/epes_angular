import { Injectable } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addCompany(newCompany: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${this.link}/companies/`, newCompany, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getCompany() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/companies/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteCompany(companyid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/companies/${companyid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getCompanyById(companyid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/companies/${companyid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
