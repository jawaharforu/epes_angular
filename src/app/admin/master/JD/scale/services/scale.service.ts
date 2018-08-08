import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addScale(fields: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/scales/`, fields, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getScale() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/scales/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteScale(scaleid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/scales/${scaleid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getScaleList() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/scales/getlist`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
