import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../admin/frontend/blog/services/blog.service';
import { ProductroadmapService } from '../../admin/frontend/productroadmap/services/productroadmap.service';
import { PressreleaseService } from '../../admin/frontend/pressrelease/pressrelease.service';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { WhitepaperService } from '../../admin/frontend/whitepaper/whitepaper.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
 
    public blogList: any;
    public productroadmapList: any;
    public pressreleaseList: any;

    public whitepaperid: String;
    public name: String;
    public field_email: String;
    public field_website: String;
    public field_company: String;

    constructor(
        private blogService: BlogService,
        private productroadmapService: ProductroadmapService,
        private pressreleaseService: PressreleaseService,
        private _validationsService: ValidationsService,
        private _commonService: CommonService,
        private activatedRoute: ActivatedRoute,
        private whitepaperService: WhitepaperService,
    ) { }

    ngOnInit() {
        this.getBlog();
        this.getProductroadmap();
        this.getPressrelease();

        this.activatedRoute.params.subscribe((params) => {
            this.whitepaperid = params['whitepaperid'];
            if (!this._validationsService.isEmpty(this.whitepaperid)) {
              this.getWhitepaperById(this.whitepaperid);
            }
          });
    }

    getBlog(){
    this.blogService.getBlogByStatus()
    .subscribe(res => {
        this.blogList = res.data;
        console.log(res.data);
        /*let j = 0;
        for (const prop of res.data) {
        if ( j === 0 ) {
            this.getFaqByCategory(prop._id);
        }
        j++;
        }*/ 
    });
    }

    getPressrelease(){
        this.pressreleaseService.getPressReleaseByStatus()
        .subscribe(res => {
        this.pressreleaseList = res.data;
        console.log(res.data);
        /*let j = 0;
        for (const prop of res.data) {
            if ( j === 0 ) {
            this.getFaqByCategory(prop._id);
            }
            j++;
        }*/ 
        });
    }

    getProductroadmap(){
        this.productroadmapService.getProductroadmapByStatus()
        .subscribe(res => {
        this.productroadmapList = res.data;
        console.log(res.data);
        /*let j = 0;
        for (const prop of res.data) {
            if ( j === 0 ) {
            this.getFaqByCategory(prop._id);
            }
            j++;
        }*/ 
        });
    }

    /*                                  WHITEPAPER                   */

    whitepaperForm(){
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_email)) {
            this._commonService.showMessage('error', 'Email address should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email)) {
            this._commonService.showMessage('error', 'Enter a valid email address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_company)) {
            this._commonService.showMessage('error', 'Company field should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_website)) {
            this._commonService.showMessage('error', 'Website field should not be empty!');
            return false;
        }

        let fieldwhitepaperid;
        if (!this._validationsService.isEmpty(this.whitepaperid)) {
            fieldwhitepaperid = {
            name: this.name,
            company: this.field_company,
            email: this.field_email,
            website: this.field_website,
            whitepaperid: this.whitepaperid
        };
        } else {
            fieldwhitepaperid = {
                name: this.name,
                company: this.field_company,
                email: this.field_email,
                website: this.field_website
        };
        }
        this.whitepaperService.addWhitepaper(fieldwhitepaperid)
        .subscribe(res => {
            if (res.success) {
                this._commonService.showMessage('success', res.msg);
                this.name = '';
                this.field_company = '';
                this.field_email= '';
                this.field_website = '';
                this._commonService.redirectTo('/resources');
            } else {
                this._commonService.showMessage('error', res.msg);
            }
        });
    }

    getWhitepaperById(whitepaperid: any) {
        this.whitepaperService.getWhitepaperById(whitepaperid)
        .subscribe(res => {
          this.name = res.data.name;
          this.field_email = res.data.email;
          this.field_company = res.data.company;
          this.field_website = res.data.website;
          this.whitepaperid = res.data._id;
        });
    } 

}

