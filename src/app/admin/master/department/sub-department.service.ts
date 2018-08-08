import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubDepartmentService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addSubDepartment(newSubDepartment: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/subdepartments/`, newSubDepartment, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getSubDepartment() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/subdepartments/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteSubDepartment(SubDepartmentid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/subdepartments/${SubDepartmentid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getSubDepartmentById(SubDepartmentid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/subdepartments/${SubDepartmentid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getSubDepartmentByCategory(departmentid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/subdepartments/list/${departmentid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
