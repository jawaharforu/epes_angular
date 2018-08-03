import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CommonService } from '../../../services/common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BudgetmasterService {

  public link: String;

  constructor(
    private _commonService: CommonService,
    private http: Http
  ) {
    this.link = this._commonService.link;
   }

  addBudgetMaster(newBudgetMaster: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/budgets`, newBudgetMaster, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetMaster() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/budgets`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteBudgetMaster(budgetid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/budgets/${budgetid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetMasterById(budgetid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/budgets/${budgetid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetMasterStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/budgets/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
