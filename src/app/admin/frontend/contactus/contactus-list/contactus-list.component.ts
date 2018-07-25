import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../contactus.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-contactus-list',
  templateUrl: './contactus-list.component.html',
  styleUrls: ['./contactus-list.component.scss']
})
export class ContactusListComponent implements OnInit {

  public contactusList: any;


  constructor(
    private _commonService: CommonService,
    private contactusService: ContactusService
  ) { }

  ngOnInit(  ) {
    this.getContactusList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldContactus = {
      name: c.name,
      email: c.email,
      mobile: c.mobile,
      message: c.message,
      status: event,
      contactusid: c._id
    };
    this.contactusService.addContactus(fieldContactus)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getContactusList() {
    this.contactusService.getContactus()
    .subscribe(res => {
      this.contactusList = res.data;
    });
  }

  editContactus(Contactus: any) {
    this._commonService.redirectTo(`/admin/contactus/edit/${Contactus._id}`);
  }

  deleteContactus(Contactusid: any) {
    this.contactusService.deleteContactus(Contactusid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getContactusList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
 
}
