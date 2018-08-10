import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { HrindexService } from '../../../admin/hrindex/hrindex.service';

@Component({
  selector: 'app-hrindex',
  templateUrl: './hrindex.component.html',
  styleUrls: ['./hrindex.component.scss']
})
export class HRIndexComponent implements OnInit {

  public name: String = '';
  public email: String = '';
  public mobile: String = '';
  public designation: String = '';
  public companyname: String = '';
  public industry: String = '';

  public question: any[] = [];
  public staffing: any;

  public options: Object;

  public questions: any[] = [
    'Cusanitium doloremque laudantium, totam rem aperiam',
    'Cusanitium doloremque laudantium, totam rem aperiam',
    'Cusanitium doloremque laudantium, totam rem aperiam',
    'Cusanitium doloremque laudantium, totam rem aperiam',
    'Cusanitium doloremque laudantium, totam rem aperiam'
  ];

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownFirst: Boolean = false;
  public isModalShownSecont: Boolean = false;
  public isModalShownThired: Boolean = false;
  public isModalShownFourth: Boolean = false;

  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    // private activatedRoute: ActivatedRoute,
    private hrindexService: HrindexService,

  ) {

  }

  getStaffing() {
    this.options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: '360 EPES HR INDEX'
      },
      subtitle: {
        text: null
      },
      xAxis: {
        // tslint:disable-next-line:max-line-length
        categories: ['Staffing', 'Training & Development', 'Performance Systems', 'Safety and Health', 'Labour Relations', 'Internal Communication', 'Diversity'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Score (points)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' points'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ('#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Score',
        data: [10,12,14,16,18,20,22]
      }
      ]
    };


  }

  ngOnInit() {
    for (let i = 0; i > this.questions.length; i++) {
      this.question[i] = '';
    }

  }

  staffingForm() {
    let k = 0;
    for (let j = 0; j < this.question.length; j++) {
      k = k + parseInt(this.question[j]);
    }
    console.log(k);
    this.staffing = k;
    this.getStaffing();
    this.openFourth();
  }

  public showModal(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = true;
    } else if (modal === 's') {
      this.isModalShownSecont = true;
    } else if (modal === 't') {
      this.isModalShownThired = true;
    } else {
      this.isModalShownFourth = true;
    }
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = false;
    } else if (modal === 's') {
      this.isModalShownSecont = false;
    } else if (modal === 't') {
      this.isModalShownThired = false;
    } else if (modal === 'fo') {
      this.isModalShownFourth = false;
    }
  }

  openSecond() {
    this.onHidden('f');
    this.onHidden('t');
    this.showModal('s');
    this.onHidden('fo');
  }

  openThird() {
    this.onHidden('f');
    this.onHidden('s');
    this.showModal('t');
    this.onHidden('fo');
  }

  openFourth() {
    this.onHidden('f');
    this.onHidden('s');
    this.onHidden('t');
    this.showModal('fo');
  }

  // closeThird() {
  //   this.onHidden('t');
  // }

  closeFourth() {
    this.onHidden('fo');
  }

  hrIndexForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.email)) {
      this._commonService.showMessage('error', 'Email should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.mobile)) {
      this._commonService.showMessage('error', 'Mobile should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.designation)) {
      this._commonService.showMessage('error', 'Designation should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.companyname)) {
      this._commonService.showMessage('error', 'Company Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.industry)) {
      this._commonService.showMessage('error', 'Industry should not be empty!');
      return false;
    }

    const hrindexField = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      designation: this.designation,
      companyname: this.companyname,
      industry: this.industry,
      status: true
    };

    this.hrindexService.addHrIndex(hrindexField)
      .subscribe(res => {
        // console.log(res);
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.name = '';
          this.email = '';
          this.mobile = '';
          this.designation = '';
          this.industry = '';
          //this.getTrainingSubheadList();
          this.openThird();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }
}
