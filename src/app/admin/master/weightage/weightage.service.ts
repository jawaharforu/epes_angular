import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeightageService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addWeightage(newWeightage: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/weightages/`, newWeightage, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getWeightage() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/weightages`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteWeightage(Weightageid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/weightages/${Weightageid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  fetchassessandheadbyjd(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/jdquestions/assessandhead/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getWeightageByJD(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/weightages/getbyjd/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
