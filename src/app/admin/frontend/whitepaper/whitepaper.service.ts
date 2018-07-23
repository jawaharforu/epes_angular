import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class WhitepaperService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }

  addWhitepaper(newWhitepaper: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/whitepapers/`, newWhitepaper, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getWhitepaper() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/whitepapers/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteWhitepaper(whitepaperId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/whitepapers/${whitepaperId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
 
  getWhitepaperById(whitepaperId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/whitepapers/${whitepaperId}`, {headers: headers})
    .pipe(map(res => res.json()));
  } 

  getWhitepaperByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/whitepapers/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
