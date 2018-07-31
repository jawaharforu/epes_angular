import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CommonService } from '../../services/common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) { }

  addTraining(newTraining: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/training/`, newTraining, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTraining() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/training/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteProducttour(trainingId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/training/${trainingId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProducttourById(trainingId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/training/${trainingId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProducttourByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/training/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
