import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogid: String = '';
  public name: String = '';
  public description: String = '';
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private blogService: BlogService
  ) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.blogid = params['blogid'];
      if (!this._validationsService.isEmpty(this.blogid)) {
        this.getBlogById(this.blogid);
      }
    });
  }

  getBlogById(blogid: any) {
    this.blogService.getBlogById(blogid)
    .subscribe(res => {
      this.name = res.data.name;
      this.description = res.data.description;
      this.blogid = res.data._id;
    });
  } 

  blogForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Blog Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description should not be empty!');
      return false;
    }
    let fieldblogid;
    if (!this._validationsService.isEmpty(this.blogid)) {
      fieldblogid = {
        name: this.name,
        description: this.description,
        blogid: this.blogid
      };
    } else {
      fieldblogid = {
        name: this.name,
        description: this.description
      };
    }
    this.blogService.addBlog(fieldblogid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.description = '';
        this._commonService.redirectTo('/admin/blog/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
