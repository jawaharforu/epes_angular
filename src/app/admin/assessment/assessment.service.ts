import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addAssessment(newAssessment: any) {
    // console.log(newAssessment);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/assessments/`, newAssessment, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssessment() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessments/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteAssessment(assessmentId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/assessments/${assessmentId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssessmentById(assessmentId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessments/${assessmentId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAssessmentByType(type: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/assessments/type/${type}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
