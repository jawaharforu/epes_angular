import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../ng-uikit-pro-standard';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { TrainingService } from './training.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    private trainingheadid: String
    private name: String
    // private status: Boolean

    public trainingHeadList: String;

    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    public isModalShown: Boolean = false;
    constructor(
        private activatedRoute: ActivatedRoute,
        private _commonService: CommonService,
        private _validationsService: ValidationsService,
        private trainingheadService: TrainingService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.trainingheadid = params['trainingheadid'];
            if (!this._validationsService.isEmpty(this.trainingheadid)) {
                this.getTrainingHeadById(this.trainingheadid);
            }
        });

        this.getTrainingHeadList();
    }

    getTrainingHeadList() {
        this.trainingheadService.getTrainingHead()
            .subscribe(res => {
                this.trainingHeadList = res.data;
                // console.log(this.trainingHeadList);
            });
    }

    getTrainingHeadById(trainingheadid: any) {
        this.trainingheadService.getTrainingHeadById(trainingheadid)
            .subscribe(res => {
                // console.log(res);
                this.name = res.data.name;
            });
    }

    trainingHeadForm() {
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name should not be empty!');
            return false;
        }
        let fieldTrainingHeadid;
        if (!this._validationsService.isEmpty(this.trainingheadid)) {
            fieldTrainingHeadid = {
                name: this.name,
                //status: this.status,
                trainingheadid: this.trainingheadid
            };
        } else {
            fieldTrainingHeadid = {
                name: this.name,
                //status: this.status
            };
        }
        this.trainingheadService.addTrainingHead(fieldTrainingHeadid)
            .subscribe(res => {
                // console.log(this.name);
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.name = '';
                    //  this.status = false;
                    // this._commonService.redirectTo('/admin/training');
                    this.getTrainingHeadList();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });
    }

    editTraininghead(Traininghead: any) {
        // this._commonService.redirectTo(`/admin/training/edit/${Traininghead._id}`);
        this.trainingheadid = Traininghead._id;
        this.name = Traininghead.name;
        window.scrollTo(0, 0);
    }

    deleteTraininghead(Trainingheadid: any) {
        this.trainingheadService.deleteTrainingHead(Trainingheadid)
            .subscribe(res => {
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.name = '';
                    this.getTrainingHeadList();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
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


}
