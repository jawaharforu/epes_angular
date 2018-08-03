import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignJDService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addAssignJD(field: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/jdtoemployees/`, field, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssignJD() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/jdtoemployees/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssignJDByJDId(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/jdtoemployees/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteAssignJD(jdid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/jdtoemployees/${jdid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
