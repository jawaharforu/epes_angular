import { Injectable } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HrindexService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addHrIndex(newHrindex: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/hrindexs`, newHrindex, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getHrIndex() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/hrindexs`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteHrIndex(hrindexId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/hrindexs/${hrindexId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getHrIndexById(hrindexId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/hrindexs/${hrindexId}`, { headers: headers }).pipe(map(res => res.json()));
  }

  getHrIndexByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/hrindexs/get/list`, { headers: headers }).pipe(map(res => res.json()));
  }
}
