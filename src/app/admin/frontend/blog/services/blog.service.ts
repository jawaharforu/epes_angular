import { Injectable } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addBlog(newBlog: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/blogs/`, newBlog, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBlog() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/blogs/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteBlog(blogId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/blogs/${blogId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBlogById(featureid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/blogs/${featureid}`, {headers: headers})
    .pipe(map(res => res.json()));
  } 

  getBlogByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/blogs/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
