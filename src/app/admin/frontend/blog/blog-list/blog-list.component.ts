import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommonService } from '../../../../services/common.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogList: any;

  constructor(
    private _commonService: CommonService,
    private blogService: BlogService
  ) { }
 
  ngOnInit() {
    this.getBlogList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldBlog = {
      name: c.name,
      description: c.description,
      status: event,
      blogid: c._id
    };
    this.blogService.addBlog(fieldBlog)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getBlogList() {
    this.blogService.getBlog()
    .subscribe(res => {
      this.blogList = res.data;
    });
  }

  editBlog(Blog: any) {
    this._commonService.redirectTo(`/admin/blog/edit/${Blog._id}`);
  }

  deleteBlog(Blogid: any) {
    this.blogService.deleteBlog(Blogid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getBlogList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
