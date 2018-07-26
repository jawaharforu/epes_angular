import { Component, OnInit } from '@angular/core';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public field_username = "";
  public field_password = "";


  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
  ) { }

  ngOnInit() {
  }

  loginForm() {
    if (this._validationsService.isEmpty(this.field_username)) {
      this._commonService.showMessage('error', 'Username field should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_username)) {
      this._commonService.showMessage('error', 'Enter a valid email address!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_password)) {
      this._commonService.showMessage('error', 'Password field should not be empty!');
      return false;
    }

    // if (this._validationsService.isPassword(this.field_password)) {
    //   // tslint:disable-next-line:max-line-length
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }

    this._commonService.redirectTo('/admin');
  }



}
