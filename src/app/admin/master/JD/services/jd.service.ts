import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JdService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addJD(newJD: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/jds/`, newJD, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getJD() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/jds/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteJD(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/jds/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getJDById(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/jds/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

}

