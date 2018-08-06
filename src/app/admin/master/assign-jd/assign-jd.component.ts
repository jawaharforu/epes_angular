import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { JdService } from '../../JD/services/jd.service';
import { OrganogramService } from '../../organogram/organogram.service';
import { EmployeeService } from '../employee/employee.service';
import { AssignJDService } from './assign-jd.service';

@Component({
  selector: 'app-assign-jd',
  templateUrl: './assign-jd.component.html',
  styleUrls: ['./assign-jd.component.scss']
})
export class AssignJDComponent implements OnInit {

  @Input() getjdid: String;
  public jd: any;
  public organogramList: any;
  public organogramid: String = '';
  public dropdownList: any = [];
  public selectedItems: any = [];
  public dropdownSettings: any = {};
  public employeeList: any;

  constructor(
    private jdService: JdService,
    private _commonService: CommonService,
    private organogramService: OrganogramService,
    private employeeService: EmployeeService,
    private assignJDService: AssignJDService,
  ) { }

  ngOnInit() {
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
        this._commonService.redirectTo('/admin/assigntoJD/');
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
