import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';
import { TrainingService } from '../training.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { HeaderService } from '../../master/JD/header/services/header.service';
import { AssessmentTypeService } from '../../master/JD/assessment-type/assessment-type.service';
import { BudgetmasterService } from '../budgetmaster/budgetmaster.service';

@Component({
    selector: 'app-budget-planning',
    templateUrl: './budget-planning.component.html',
    styleUrls: ['./budget-planning.component.scss']
})
export class BudgetPlanningComponent implements OnInit {

    public budgetplanid: String = '';

    public assessmenttypeid: String = '';
    public headerid: String = '';
    public trainingheadid: String = '';
    public trainingsubheadid: String = '';
    public budgetid: String = '';
    public percentage: String = '';

    public budgetplanList: String = '';
    public assessmenttypeList: String = '';
    public headerList: String = '';
    public trainingheadList: String = '';
    public trainingsubheadList: String = '';

    public year: String = '';
    public amount: String = '';

    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    public isModalShown: Boolean = false;


    constructor(
        private activatedRoute: ActivatedRoute,
        private _commonService: CommonService,
        private _validationsService: ValidationsService,
        private budgetplanService: TrainingService,
        private assessmentTypeService: AssessmentTypeService,
        private headerService: HeaderService,
        private trainingheadService: TrainingService,
        private trainingsubheadService: TrainingService,
        private budgetService: BudgetmasterService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.budgetid = params['budgetid'];
            if (!this._validationsService.isEmpty(this.budgetid)) {
                this.getBudgetplanByBudgetId(this.budgetid);
            } else {
              this._commonService.showMessage('error', 'Add budget plan from budget master!!!');
              this._commonService.redirectTo('/admin/training/budgetmaster');
            }
        });

        this.getBudgetPlanList();
        this.getAssessmenttypeList();
        this.getHeaderList();
        this.getTrainingheadList();
    }

    getAssessmenttypeList() {
        this.assessmentTypeService.getAssessmenttype().subscribe(res => {
            this.assessmenttypeList = res.data;
            // console.log(this.assessmenttypeList);
        });
    }


    getHeaderList() {
        this.headerService.getHeader().subscribe(res => {
            this.headerList = res.data;
            // console.log(this.headerList);
        });
    }

    getTrainingheadList() {
        this.trainingheadService.getTrainingHead().subscribe(res => {
            this.trainingheadList = res.data;
            // console.log(this.trainingheadList);
        });
    }

    getTrainingsubheadList(trainingheadid: any, which: any) {
        this.trainingsubheadService.getTrainingsubheadByCategory(trainingheadid)
            .subscribe(res => {
                this.trainingsubheadList = res.data;
                if (which === 'c') {
                    this.trainingsubheadid = '';
                }
            });
    }

    getTrainingsubhead() {
        if (this._validationsService.isEmpty(this.trainingheadid)) {
            this._commonService.showMessage('error', 'Category field should not be empty!');
            return false;
        }
        this.getTrainingsubheadList(this.trainingheadid, 'c');
    }

    getBudgetplanByBudgetId(budgetid: any) {
        this.budgetService.getBudgetMasterById(budgetid)
            .subscribe(res => {
                this.year = res.data.year;
                this.amount = res.data.amount;
                this.budgetid = res.data._id;
                // console.log(this.year);
            });
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

    budgetplanningForm() {
        if (this._validationsService.isEmpty(this.assessmenttypeid)) {
            this._commonService.showMessage('error', 'Please select Assessment!');
            return false;
        }

        if (this._validationsService.isEmpty(this.headerid)) {
            this._commonService.showMessage('error', 'Please select Header!');
            return false;
        }

        if (this._validationsService.isEmpty(this.trainingheadid)) {
            this._commonService.showMessage('error', 'Please select Training Head!');
            return false;
        }

        if (this._validationsService.isEmpty(this.trainingsubheadid)) {
            this._commonService.showMessage('error', 'Please select Training Sub Head!');
            return false;
        }

        if (this._validationsService.isEmpty(this.percentage)) {
            this._commonService.showMessage('error', 'Please select Percentage!');
            return false;
        }

        let fieldbudgetplanid;
        if (!this._validationsService.isEmpty(this.budgetplanid)) {
            fieldbudgetplanid = {
                assessmenttypeid: this.assessmenttypeid,
                headerid: this.headerid,
                trainingheadid: this.trainingheadid,
                trainingsubheadid: this.trainingsubheadid,
                budgetid: this.budgetid,
                percentage: this.percentage,
                budgetplanid: this.budgetplanid
            };
        } else {
            fieldbudgetplanid = {
                assessmenttypeid: this.assessmenttypeid,
                headerid: this.headerid,
                trainingheadid: this.trainingheadid,
                trainingsubheadid: this.trainingsubheadid,
                budgetid: this.budgetid,
                percentage: this.percentage,
            };
        }
        this.budgetplanService.addBudgetPlanning(fieldbudgetplanid)
            .subscribe(res => {
                // console.log(res);
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.assessmenttypeid = '';
                    this.headerid = '';
                    this.trainingheadid = '';
                    this.trainingsubheadid = '';
                    this.percentage = '';
                    // this._commonService.redirectTo('/admin/training/budgetplanning');
                    this.getBudgetPlanList();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });
    }

    updateStatus(event: boolean, c: any) {
        const fieldBudgetplan = {
            assessmenttypeid: c.assessmenttypeid,
            headerid: c.headerid,
            trainingheadid: c.trainingheadid,
            trainingsubheadid: c.trainingsubheadid,
            budgetid: c.budgetid,
            percentage: c.percentage,
            budgetplanid: c.budgetplanid,
            status: event
        };
        this.budgetplanService.addBudgetPlanning(fieldBudgetplan)
            .subscribe(res => {
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });
    }

    getBudgetPlanList() {
        this.budgetplanService.getBudgetPlanning()
            .subscribe(res => {
                this.budgetplanList = res.data;
                // console.log(this.budgetplanList);
            });
    }

    editBudgetPlan(c: any) {
        this.assessmenttypeid = c.assessmenttypeid._id;
        this.headerid = c.headerid._id;
        this.trainingheadid = c.trainingheadid._id;
        this.getTrainingsubheadList(this.trainingheadid, 'a');
        this.trainingsubheadid = c.trainingsubheadid._id;
        this.budgetid = c.budgetid._id;
        this.percentage = c.percentage;
        this.budgetplanid = c._id;
        this.showModal();
        window.scrollTo(0, 0);
    }

    deleteBudgetPlan(Budgetplanid: any) {
        this.budgetplanService.deleteBudgetPlanning(Budgetplanid)
            .subscribe(res => {
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.assessmenttypeid = '';
                    this.headerid = '';
                    this.trainingheadid = '';
                    this.getTrainingsubheadList(this.trainingheadid, 'a');
                    this.trainingsubheadid = '';
                    this.budgetid = '';
                    this.percentage = '';
                    this.getBudgetPlanList();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });
    }

}
