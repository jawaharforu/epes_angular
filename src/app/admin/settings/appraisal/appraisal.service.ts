import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CommonService } from '../../../services/common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppraisalService {
  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }
  addAppraisal(newAppraisal: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/appraisals`, newAppraisal, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAppraisal() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/appraisals`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteAppraisal(appraisalId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/appraisals/${appraisalId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAppraisalById(appraisalId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/appraisals/${appraisalId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAppraisalByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/appraisals/get/list`, { headers: headers })
      .pipe(map(res => res.json()));
  }
}
