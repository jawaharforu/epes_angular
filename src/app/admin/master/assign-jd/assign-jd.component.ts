import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { JdService } from '../../master/JD/services/jd.service';
import { OrganogramService } from '../organogram/organogram.service';
import { EmployeeService } from '../employee/employee.service';
import { AssignJDService } from './assign-jd.service';
import { ValidationsService } from '../../../services/validations.service';

@Component({
  selector: 'app-assign-jd',
  templateUrl: './assign-jd.component.html',
  styleUrls: ['./assign-jd.component.scss']
})
export class AssignJDComponent implements OnInit {

  public getjdid: String;
  public jd: any;
  public organogramList: any;
  public organogramid: String = '';
  public dropdownList: any = [];
  public selectedItems: any = [];
  public dropdownSettings: any = {};
  public employeeList: any;

  constructor(
    private jdService: JdService,
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private organogramService: OrganogramService,
    private employeeService: EmployeeService,
    private assignJDService: AssignJDService,
    private _validationsService: ValidationsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getjdid = params['jdid'];
      if (!this._validationsService.isEmpty(this.getjdid)) {
        this.getJDData();
        this.getOrganogramFullList();
        this.getEmployeeList();
        this.getAssignJDByJDId();
        this.dropdownSettings = {
                  singleSelection: false,
                  text: 'Select Employee',
                  selectAllText: 'Select All',
                  unSelectAllText: 'UnSelect All',
                  enableSearchFilter: true,
                  classes: 'myclass custom-class'
                };
      } else {
        this._commonService.redirectTo('/admin/assignjd');
      }
    });
  }

  getJDData() {
    this.jdService.getJDById(this.getjdid)
    .subscribe(res => {
      this.jd = res.data;
    });
  }

  getOrganogramFullList() {
    this.organogramService.getOrganogramFullList()
    .subscribe(res => {
      this.organogramList = res.data;
    });
  }

  getEmployeeList() {
    this.employeeService.getEmployee()
    .subscribe(res => {
      this.dropdownList = [];
      for (const prop of res.data) {
        this.dropdownList.push({'id': prop._id, 'itemName': prop.employeename + '-' + prop.employeenum});
      }
    });
  }

  filterEmployee() {
    this.employeeService.getEmployeeByLevel(this.organogramid)
    .subscribe(res => {
      this.dropdownList = [];
      for (const prop of res.data) {
        this.dropdownList.push({'id': prop._id, 'itemName': prop.employeename + '-' + prop.employeenum});
      }
    });
  }

  getAssignJDByJDId() {
    this.assignJDService.getAssignJDByJDId(this.getjdid)
    .subscribe(res => {
      this.selectedItems = [];
      for (const prop of res.data[0].employeeid) {
        this.selectedItems.push({'id': prop._id, 'itemName': prop.employeename + '-' + prop.employeenum});
        this.organogramid = prop.organogramid;
      }
    });
  }

  assignJDForm() {
    const employeeids = this.selectedItems.map((item: any) => item.id);
    if (employeeids.length === 0) {
      this._commonService.showMessage('error', 'Select atleast one employee');
      return false;
    }
    const field = {
      jdid: this.getjdid,
      employeeid: employeeids
    };

    this.assignJDService.addAssignJD(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this._commonService.redirectTo('/admin/assignjd/');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  onItemSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
  }

}
