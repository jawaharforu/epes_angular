import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CommonService } from '../../../services/common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {
  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }

  addGlobalsettings(newGlobalsettings: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/globalsettings`, newGlobalsettings, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getGlobalsettings() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/globalsettings`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteGlobalsettings(globalsettingsId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/globalsettings/${globalsettingsId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getGlobalsettingsById(globalsettingsId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/globalsettings/${globalsettingsId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getGlobalsettingsByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/globalsettings/get/list`, { headers: headers })
      .pipe(map(res => res.json()));
  }
}
