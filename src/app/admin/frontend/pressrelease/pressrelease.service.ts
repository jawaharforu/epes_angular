import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '../../../../../node_modules/@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PressreleaseService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }
  
  addPressRelease(newPressRelease: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/pressreleases/`, newPressRelease, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getPressRelease() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/pressreleases/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deletePressRelease(pressreleaseid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/pressreleases/${pressreleaseid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getPressreleaseById(pressreleaseid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/pressreleases/${pressreleaseid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getPressReleaseByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/pressreleases/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
