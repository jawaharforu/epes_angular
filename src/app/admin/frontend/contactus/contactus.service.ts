import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addContactus(newContactus: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/contacts/`, newContactus, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getContactus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/contacts/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteContactus(contactusId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/contacts/${contactusId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getContactusById(contactusId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/contacts/${contactusId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getContactusByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/contacts/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getCountryList() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/commons/countryCodes`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
