import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addHeader(fields: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/headers/`, fields, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getHeader() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/headers/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteHeader(headerid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/headers/${headerid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getHeaderList() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/headers/getlist`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
