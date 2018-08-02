import { Component, OnInit, Input } from '@angular/core';
import { JdService } from '../../JD/services/jd.service';
import { OrganogramService } from '../../organogram/organogram.service';
import { EmployeeService } from '../employee/employee.service';

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
    private organogramService: OrganogramService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getJDData();
    this.getOrganogramFullList();
    this.getEmployeeList();
    this.selectedItems = [
            {'id': 2, 'itemName': 'Singapore'},
            {'id': 3, 'itemName': 'Australia'},
            {'id': 4, 'itemName': 'Canada'},
            {'id': 5, 'itemName': 'South Korea'}
        ];
    this.dropdownSettings = {
              singleSelection: false,
              text: 'Select Countries',
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
      for (const prop of res.data) {
        this.dropdownList.push({'id': prop._id, 'itemName': prop.name});
      }
      console.log(this.dropdownList);
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
