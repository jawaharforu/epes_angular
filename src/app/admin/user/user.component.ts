import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userList: any;

  constructor(
    private _commonService: CommonService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUser()
    .subscribe(res => {
      console.log(res.data);
      this.userList = res.data;
    });
  }

  deleteUser(userid: any) {
    this.userService.deleteUser(userid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getUserList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
