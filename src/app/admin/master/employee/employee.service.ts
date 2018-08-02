import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addEmployee(newJD: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/employees/`, newJD, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmployee() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/employees/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteEmployee(employeeid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/employees/${employeeid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmployeeById(employeeid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/employees/${employeeid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmployeeByLevel(organogramid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/employees/getbylevel/${organogramid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

}
