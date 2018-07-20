import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductroadmapService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  } 
  
  addProductroadmap(newRoadmap: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/productroadmaps/`, newRoadmap, {headers: headers})
    .pipe(map(res => res.json()));
  }
 
  getProductroadmap() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/productroadmaps/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteProductroadmap(productroadmapid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/productroadmaps/${productroadmapid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProductroadmapById(productroadmapid: any) { 
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/productroadmaps/${productroadmapid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProductroadmapByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/productroadmaps/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
