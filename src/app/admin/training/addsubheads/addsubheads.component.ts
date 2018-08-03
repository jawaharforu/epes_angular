import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';
import { TrainingService } from '../training.service';
import { ValidationsService } from '../../../services/validations.service';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-addsubheads',
    templateUrl: './addsubheads.component.html',
    styleUrls: ['./addsubheads.component.scss']
})
export class AddsubheadsComponent implements OnInit {

    public trainingheadid: String;
    public name: String;
    public trainingsubheadid: String;

    public trainingHeadList: String;

    public trainingSubheadList: String;

    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    public isModalShown: Boolean = false;
    constructor(
        private activatedRoute: ActivatedRoute,
        private _commonService: CommonService,
        private _validationsService: ValidationsService,
        private trainingsubheadService: TrainingService,
        private trainingheadService: TrainingService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.trainingsubheadid = params['trainingsubheadid'];
            // console.log(this.primaryemailid);
            if (!this._validationsService.isEmpty(this.trainingsubheadid)) {
                this.getTrainingsubheadById(this.trainingsubheadid);
            }
        });

        this.getTrainingHeadList();
        this.getTrainingSubheadList();
    }

    getTrainingHeadList(){
        this.trainingheadService.getTrainingHead()
    .subscribe(res => {
      this.trainingHeadList = res.data;
    //   console.log(this.trainingHeadList);
    });
    }

    getTrainingSubheadList(){
        this.trainingsubheadService.getTrainingsubhead()
    .subscribe(res => {
      this.trainingSubheadList = res.data;
    //   console.log(this.trainingSubheadList);
    });
    }

    getTrainingsubheadById(trainingsubheadid: any) {
        this.trainingsubheadService.getTrainingsubheadById(trainingsubheadid)
            .subscribe(res => {
                this.name = res.data.name;
                this.trainingheadid = res.data.trainingheadid;
                this.trainingsubheadid = res.data._id;
                // console.log();
            });
    }

    trainingsubheadForm() {
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name should not be empty!');
            return false;
        }

        if (this._validationsService.isEmpty(this.trainingheadid)) {
            this._commonService.showMessage('error', 'Training Head should not be empty!');
            return false;
        }
        let fieldTrainingsubheadid;
        if (!this._validationsService.isEmpty(this.trainingsubheadid)) {
            fieldTrainingsubheadid = {
                name: this.name,
                trainingheadid: this.trainingheadid,
                trainingsubheadid: this.trainingsubheadid
            };
        } else {
            fieldTrainingsubheadid = {
                name: this.name,
                trainingheadid: this.trainingheadid,
            };
        }
        // console.log(fieldemailid);
        this.trainingsubheadService.addTrainingsubhead(fieldTrainingsubheadid)
            .subscribe(res => {
                // console.log(res);
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.name = '';
                    this.trainingheadid = '';
                    this.getTrainingSubheadList();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });
    }

    editTrainingsubhead(a: any) {
        // this._commonService.redirectTo(`/admin/training/addsubheads/edit/${Trainingsubhead._id}`);
        this.trainingsubheadid = a._id;
        this.trainingheadid = a.trainingheadid._id;
        this.name = a.name;
        window.scrollTo(0, 0);
    }

    // editTrainingsubhead(a: any) {
    //     this.trainingsubheadid = a._id;
    //     this.name = a.name;
    //     this.trainingheadid = a.trainingheadid._id;
    //     window.scrollTo(0, 0);
    //   }

    deleteTrainingsubhead(Trainingsubheadid: any) {
        this.trainingsubheadService.deleteTrainingsubhead(Trainingsubheadid)
            .subscribe(res => {
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.name = '';
                    this.trainingheadid = '';
                    this.getTrainingSubheadList();
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
