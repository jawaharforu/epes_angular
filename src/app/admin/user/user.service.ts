import { Injectable } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public link: String;
  public authToken: any;
  public user: any;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
  }

  addUser(newUser: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${this.link}/users/`, newUser, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getUser() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/users/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteUser(userid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/users/${userid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getUserById(userid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/users/${userid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  checkUserExist(field: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${this.link}/users/checkuser/email`, field, {headers: headers})
    .pipe(map(res => res.json()));
  }

  authenticateUser(user: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.link}/users/authendicate`, user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  storeUserData(token: any, user: any) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
