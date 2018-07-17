import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addFeature(newFeature: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/features/`, newFeature, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFeature() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/features/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteFeature(featureid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/features/${featureid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFeatureById(featureid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/features/${featureid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getFeatureByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/features/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
