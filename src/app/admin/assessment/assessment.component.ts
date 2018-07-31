import { Component, OnInit } from '@angular/core';
import { IMyDate } from 'ng-uikit-pro-standard/public_api';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  public duration: IMyDate;

  constructor() { }

  ngOnInit() {
  }

}
