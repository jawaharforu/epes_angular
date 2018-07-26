import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BlogService } from '../../../admin/frontend/blog/services/blog.service';
import { ValidationsService } from '../../../services/validations.service';

@Component({
  selector: 'app-bloginner',
  templateUrl: './bloginner.component.html',
  styleUrls: ['./bloginner.component.scss']
})
export class BloginnerComponent implements OnInit {

  public blogid: String;
  public blog: any;

  constructor(
    private activatedRoute: ActivatedRoute,
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

  getBlogById(blogID: any) {
    this.blogService.getBlogById(blogID)
    .subscribe(res => {
      this.blog = res.data;
    });
  }

}
