import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addDepartment(newDepartment: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/departments/`, newDepartment, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getDepartment() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/departments/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteDepartment(Departmentid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/departments/${Departmentid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getDepartmentById(Departmentid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/departments/${Departmentid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getDepartmentByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/departments/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
