import { Component, OnInit } from '@angular/core';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public field_username: String = '';
  public field_password: String = '';


  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  loginForm() {
    if (this._validationsService.isEmpty(this.field_username)) {
      this._commonService.showMessage('error', 'Username should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_username)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_password)) {
      this._commonService.showMessage('error', 'Password should not be empty!');
      return false;
    }

    // if (this._validationsService.isPassword(this.field_password)) {
    // tslint:disable-next-line:max-line-length
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }
    const user = {
      email: this.field_username,
      password: this.field_password
    };
    this.userService.authenticateUser(user).subscribe(res => {
      if (res.success) {
        this.userService.storeUserData(res.token, res.user);
        this._commonService.showMessage('success', 'Your Successfully Logged In');
        this._commonService.redirectTo('/admin');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
