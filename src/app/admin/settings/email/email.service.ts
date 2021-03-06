import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }

  addEmail(newEmail: any) {
    console.log(newEmail);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/primaryemails/`, newEmail, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmail() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/primaryemails/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteEmail(emailId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/primaryemails/${emailId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmailById(emailId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/primaryemails/${emailId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getEmailByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/primaryemails/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
