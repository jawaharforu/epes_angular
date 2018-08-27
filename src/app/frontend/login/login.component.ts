import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';
import { UserService } from '../../admin/user/user.service';
import { ModalDirective } from '../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public field_username: String = '';
  public field_password: String = '';
  public otpid: String = '';
  public otp: String = '';
  public loginType: String = '';
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;


  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  getOTP() {
    if (this._validationsService.isEmpty(this.field_username)) {
      this._commonService.showMessage('error', 'Email should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_username)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }
    this.userService.getOTP({email: this.field_username})
    .subscribe(otpres => {
      if (otpres.success) {
        this.otpid = otpres.data._id;
        this._commonService.showMessage('success', 'OTP send to your email');
        this.showModal();
      } else {
        this._commonService.showMessage('error', otpres.msg);
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

  loginForm() {
    if (this._validationsService.isEmpty(this.field_username)) {
      this._commonService.showMessage('error', 'Username should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_username)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }
    if (this._validationsService.isEmpty(this.otp)) {
      this._commonService.showMessage('error', 'OTP should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.otpid)) {
      this._commonService.showMessage('error', 'Click resend otp to get new OTP');
      return false;
    }

    // if (this._validationsService.isEmpty(this.field_password)) {
    //   this._commonService.showMessage('error', 'Password should not be empty!');
    //   return false;
    // }

    // if (this._validationsService.isPassword(this.field_password)) {
    // tslint:disable-next-line:max-line-length
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }
    const otpField = {
      otpid: this.otpid,
      otp: this.otp
    };
    this.userService.checkOTP(otpField)
    .subscribe(resotp => {
      if (resotp.success) {
        const user = {
          email: this.field_username,
          password: '123456'
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
      } else {
        this._commonService.showMessage('error', resotp.msg);
      }
    });
  }

}
