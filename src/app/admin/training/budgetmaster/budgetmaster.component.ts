import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { BudgetmasterService } from './budgetmaster.service';

@Component({
  selector: 'app-budgetmaster',
  templateUrl: './budgetmaster.component.html',
  styleUrls: ['./budgetmaster.component.scss']
})
export class BudgetmasterComponent implements OnInit {

  public budgetid: String;
  public year: String;
  public amount: String;
  public status: Boolean;


  public today: any[] = [
    { 'year': 2015 },
    { 'year': 2016 },
    { 'year': 2017 },
    { 'year': 2018 },
    { 'year': 2019 },
    { 'year': 2020 },
    { 'year': 2021 },
  ];

  public budgetMasterList: any;




  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private budgetmasterService: BudgetmasterService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.budgetid = params['budgetid'];
      if (!this._validationsService.isEmpty(this.budgetid)) {
        this.getBudgetById(this.budgetid);
      }
    });

    this.getbudgetMasterList();

  }

  getbudgetMasterList() {
    this.budgetmasterService.getBudgetMaster().subscribe(res => {
      this.budgetMasterList = res.data;
    });
  }

  getBudgetById(budgetid: any) {
    this.budgetmasterService.getBudgetMasterById(budgetid)
      .subscribe(res => {
        // console.log(res);
        this.year = res.data.year;
        this.amount = res.data.amount;
        this.status = res.data.status;
        this.budgetid = res.data._id;
      });
  }

  budgetmasterform() {
    if (this._validationsService.isEmpty(this.year)) {
      this._commonService.showMessage('error', 'Year should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.amount)) {
      this._commonService.showMessage('error', 'Amount field should not be empty!');
      return false;
    }
    let fieldBudgetMasterid;
    if (!this._validationsService.isEmpty(this.budgetid)) {
      fieldBudgetMasterid = {
        year: this.year,
        amount: this.amount,
        status: this.status,
        budgetid: this.budgetid
      };
    } else {
      fieldBudgetMasterid = {
        year: this.year,
        amount: this.amount,
        status: this.status
      };
    }
    this.budgetmasterService.addBudgetMaster(fieldBudgetMasterid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.year = '';
          this.amount = '';
          this.status = false;
          // this._commonService.redirectTo('/admin/training/budgetmaster');
          this.getbudgetMasterList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  editBudgetmaster(c: any) {
    this.year = c.year;
    this.amount = c.amount;
    this.budgetid = c._id;
  }

  deleteBudgetmaster(Budgetmaster: any) {
    this.budgetmasterService.deleteBudgetMaster(Budgetmaster)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.year = '';
          this.amount = '';
          this.getbudgetMasterList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  planBudgetmaster(Budgetmasterid: any){
    this._commonService.redirectTo(`/admin/training/budgetplanning/${Budgetmasterid}`);
    // console.log(Budgetmasterid);
  }


  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }

}
