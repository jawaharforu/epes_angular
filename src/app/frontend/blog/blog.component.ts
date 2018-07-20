import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../admin/frontend/blog/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogList: any;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(){
    this.blogService.getBlogByStatus()
    .subscribe(res => {
      console.log(res.data);
      this.blogList = res.data;
      /*let j = 0;
      for (const prop of res.data) {
        if ( j === 0 ) {
          this.getFaqByCategory(prop._id);
        }
        j++;
      }*/ 
    });
  }

}
