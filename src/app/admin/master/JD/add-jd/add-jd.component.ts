import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ValidationsService } from '../../../../services/validations.service';
import { JdService } from '../../JD/services/jd.service';

@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.scss']
})
export class AddJdComponent implements OnInit {

  public description: String = '';
  public name: String = '';
  public filename: String = '';
  public jdid: String = '';
  public uploader: FileUploader;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private jdService: JdService
  ) {
    this.uploader = new FileUploader({url: this._commonService.jdUpload, itemAlias: 'file'});
  }

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
    this.activatedRoute.params.subscribe((params) => {
      this.jdid = params['jdid'];
      if (!this._validationsService.isEmpty(this.jdid)) {
        this.getJDById();
      }
    });
  }

  getJDById() {
    this.jdService.getJDById(this.jdid)
    .subscribe(res => {
      this.description = res.data.description;
      this.name = res.data.name;
      this.jdid = res.data._id;
    });
  }

  jdForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'JD Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description.replace(/<[^>]*>/g, ''))) {
      this._commonService.showMessage('error', 'Description should not be empty!');
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
        this.jdid = '';
        this.name = '';
        this.description = '';
        this.filename = '';
        this._commonService.redirectTo('/admin/jd/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
