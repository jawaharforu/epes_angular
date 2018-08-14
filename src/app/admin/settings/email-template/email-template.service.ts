import { Injectable } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addEmailTemplate(newEmailTemplate: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/emailtemplates/`, newEmailTemplate, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getEmailTemplate() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/emailtemplates/`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteEmailTemplate(emailTemplateid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/emailtemplates/${emailTemplateid}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getEmailTemplateById(emailTemplateid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/emailtemplates/${emailTemplateid}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getEmailTemplateByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/emailtemplates/get/list`, { headers: headers })
      .pipe(map(res => res.json()));
  }
}
