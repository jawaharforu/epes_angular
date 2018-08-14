import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentTypeService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addAssessmenttype(fields: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/assessmenttypes/`, fields, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssessmenttype() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessmenttypes/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteAssessmenttype(assessmenttypeid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/assessmenttypes/${assessmenttypeid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssessmenttypeList() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessmenttypes/getlist`, {headers: headers})
    .pipe(map(res => res.json()));
  }
  getAssessmenttypeById(assessmenttypeid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessmenttypes/${assessmenttypeid}`, { headers: headers }).pipe(map(res => res.json()));
  }
}
