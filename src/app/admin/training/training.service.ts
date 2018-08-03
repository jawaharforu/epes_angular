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
  ) { 
    this.link = this._commonService.link;
  }


  //Training Head

  addTrainingHead(newTraining: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/trainingheads`, newTraining, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getTrainingHead() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/trainingheads`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteTrainingHead(trainingId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/trainingheads/${trainingId}`, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getTrainingHeadById(trainingId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/trainingheads/${trainingId}`, { headers: headers }).pipe(map(res => res.json()));
  }

  getTrainingHeadByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/trainingheads/get/list`, { headers: headers }).pipe(map(res => res.json()));
  }


  //Training Subhead

  addTrainingsubhead(newTrainingsubhead: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/trainingsubheads/`, newTrainingsubhead, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTrainingsubhead() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/trainingsubheads/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteTrainingsubhead(trainingsubheadId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/trainingsubheads/${trainingsubheadId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTrainingsubheadById(trainingsubheadId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/trainingsubheads/${trainingsubheadId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTrainingsubheadByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/trainingsubheads/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTrainingsubheadByCategory(Trainingsubheadid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/trainingsubheads/list/${Trainingsubheadid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }












  //budget planning
  addBudgetPlanning(newBudgetplan: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.post(`${this.link}/budgetplans/`, newBudgetplan, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetPlanning() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/budgetplans/`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteBudgetPlanning(budgetplanningId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.delete(`${this.link}/budgetplans/${budgetplanningId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetPlanningById(budgetplanningId: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/budgetplans/${budgetplanningId}`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetPlanningByStatus() {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get(`${this.link}/budgetplans/get/list`, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBudgetPlanningByBudgetid(Budgetplanid: any) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this._commonService.getUserToken());
    return this.http.get(`${this.link}/budgetplans/list/${Budgetplanid}`, {headers: headers})
    .pipe(map(res => res.json()));
  }
}
