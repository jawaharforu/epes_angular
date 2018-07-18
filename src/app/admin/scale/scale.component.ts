import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { ScaleService } from '../JD/scale/services/scale.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  scaleForm: FormGroup;
  scaleid: String;
  scaleList: any;

  constructor(
    private _fb: FormBuilder,
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private scaleService: ScaleService
  ) { }

  ngOnInit() {
    this.scaleForm = this._fb.group({
      noofoption: this._fb.control(2),
      options: this._fb.array([this.initItemRows(), this.initItemRows()])
    });
    this.getScaleList();
  }

  getScaleList() {
    this.scaleService.getScale()
    .subscribe(res => {
      this.scaleList = res.data;
    });
  }

  initItemRows() {
    return this._fb.group({
        itemname: ['']
    });
  }

  clearFormArray() {
    const control = <FormArray>this.scaleForm.controls['options'];
    while (control.length !== 1) {
      control.removeAt(0);
    }
  }

  addNewRow() {
      const control = <FormArray>this.scaleForm.controls['options'];
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      const control = <FormArray>this.scaleForm.controls['options'];
      control.removeAt(index);
  }

  optionFields(value: any) {
    this.clearFormArray();
    for ( let i = 1; i < value; i++) {
      this.addNewRow();
    }
  }

  scaleFormSubmit(): any {
    let fields;
    if (!this._validationsService.isEmpty(this.scaleid)) {
      fields = {
        scaleid: this.scaleid,
        noofoption: this.scaleForm.value.noofoption,
        options: this.scaleForm.value.options
      };
    } else {
      fields = {
        noofoption: this.scaleForm.value.noofoption,
        options: this.scaleForm.value.options
      };
    }

    this.scaleService.addScale(fields)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getScaleList();
        this.ngOnInit();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editScale(s: any) {
    this.scaleid = s._id;
    this.optionFields(s.options.length);
    this.scaleForm.setValue({
      noofoption: s.noofoption,
      options: s.options
    });
    window.scrollTo(0, 0);
  }

  deleteScale(scaleid: any) {
    this.scaleService.deleteScale(scaleid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getScaleList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
