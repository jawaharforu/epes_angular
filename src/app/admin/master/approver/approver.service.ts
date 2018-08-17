import { Injectable } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApproverService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addApprover(newApprover: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/approvers/`, newApprover, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getApprover() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/approvers/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteApprover(approverid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/approvers/${approverid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
