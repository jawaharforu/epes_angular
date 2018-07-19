import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class OrganogramService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addOrganogram(fields: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/organograms/`, fields, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getOrganogram(organogramid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/organograms/${organogramid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteOrganogram(organogramid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/organograms/${organogramid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getOrganogramList() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/organograms/getlist`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getOrganogramById(organogramid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/organograms/get/${organogramid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getOrganogramChild(organogramid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/organograms/getchild/${organogramid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
