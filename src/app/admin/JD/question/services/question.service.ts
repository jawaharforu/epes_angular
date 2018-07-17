import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addQuestion(fields: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/questions/`, fields, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getQuestion() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/questions/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

}
