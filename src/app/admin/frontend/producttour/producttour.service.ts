import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProducttourService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { 
    this.link = this._commonService.link;
  }

  addProducttour(newProducttourr: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/producttours/`, newProducttourr, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProducttour() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/producttours/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteProducttour(producttourId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/producttours/${producttourId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
 
  getProducttourById(producttourId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/producttours/${producttourId}`, {headers: headers})
    .pipe(map(res => res.json()));
  } 

  getProducttourByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/producttours/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
