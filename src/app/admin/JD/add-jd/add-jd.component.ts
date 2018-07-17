import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ValidationsService } from '../../../services/validations.service';
import { JdService } from '../../JD/services/jd.service';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';


const URL = 'http://localhost:3000/api/jds/upload';

@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.scss']
})
export class AddJdComponent implements OnInit {

  public description: String;
  public name: String;
  public filename: String = '';
  public jdid: String = '';
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'file'});
  public jdList: any;
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private jdService: JdService
  ) { }

  ngOnInit() {
    this._commonService.loader(false);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (_item: any, response: any, _status: any, _headers: any) => {
      const res: any = JSON.parse(response);
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.description = res.data;
        this.filename = res.filename;
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    };
    this.getJDList();
  }

  getJDList() {
    this.jdService.getJD()
    .subscribe(res => {
      this.jdList = res.data;
    });
  }

  jdForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description.replace(/<[^>]*>/g, ''))) {
      this._commonService.showMessage('error', 'Description field should not be empty!');
      return false;
    }

    let newJD;
    if (!this._validationsService.isEmail(this.jdid)) {
      newJD = {
        name: this.name,
        description: this.description,
        filename: this.filename,
        jdid: this.jdid
      };
    } else {
      newJD = {
        name: this.name,
        description: this.description,
        filename: this.filename
      };
    }
    this.jdService.addJD(newJD)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getJDList();
        this.jdid = '';
        this.name = '';
        this.description = '';
        this.filename = '';
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editJD(j: any) {
    this.jdid = j._id;
    this.name = j.name;
    this.description = j.description;
    window.scrollTo(0, 0);
  }

  deleteJD(jdid: any) {
    this.jdService.deleteJD(jdid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getJDList();
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
