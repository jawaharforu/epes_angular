import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../admin/frontend/blog/services/blog.service';
import { ProductroadmapService } from '../../admin/frontend/productroadmap/services/productroadmap.service';
import { PressreleaseService } from '../../admin/frontend/pressrelease/pressrelease.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
 
    public blogList: any;
    public productroadmapList: any;
    public pressreleaseList: any;

    constructor(
        private blogService: BlogService,
        private productroadmapService: ProductroadmapService,
        private pressreleaseService: PressreleaseService
    ) { }

    ngOnInit() {
        this.getBlog();
        this.getProductroadmap();
        this.getPressrelease();
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

    whitepaperForm(){

    }

}

