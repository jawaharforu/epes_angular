import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '../../../../../node_modules/@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CareerService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }

  addCareer(newCareer: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/careers/`, newCareer, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getCareer() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/careers/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteCareer(careerId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/careers/${careerId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
 
  getCareerById(careerId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/careers/${careerId}`, {headers: headers})
    .pipe(map(res => res.json()));
  } 

  getCareerByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/careers/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
 