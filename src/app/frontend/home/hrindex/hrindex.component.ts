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
  public hrindexid: String = '';

  public question: any[] = [];
  public section: any[] = [];
  public staffing: any;

  public options: Object;

  public questions: any[] = [
    {
      'head': 'Staffing',
      'question': [
        {
          'q': 'Number of recruiting advertising programs',
        },
        {
          'q': 'Number of applicants contacted compared with those reporting for job interviews',
        },
        {
          'q': 'Time to fill a job',
        },
        {
          'q': 'Cost of filling a job',
        },
        {
          'q': 'Average tenure of employees',
        },
        {
          'q': 'Percent of internally filled jobs',
        },
        {
          'q': 'Performance of hired applicants (e.g., performance of candidates from different schools,types of experience, etc.)',
        },
        {
          'q': 'Percent of multilingual employees',
        },
        {
          'q': 'Ratio of backup talent (number of prepared backups in place for top “X” jobs)'
        }
      ]
    },
    {
      'head': 'Training and Developments',
      'question': [
        { 'q': 'Number of training days and programs held per year', },
        { 'q': 'Cost per trainee hour', },
        { 'q': 'Percent of employees involved in training' },
        { 'q': 'Number of courses taught by subject' },
        { 'q': 'Percent of employees with development plans' },
        { 'q': 'Percent of payroll spent on training' },
        { 'q': 'Ratio of advanced to remedial education' },
        { 'q': 'Time for new program design' },
        { 'q': 'Percent of new material in programs each year' }
      ]
    },
    {
      'head': 'Performance Systems',
      'question': [
        { 'q': 'Acceptance of appraisal processes by employees' },
        { 'q': 'Effectiveness of appraisal process for dealing with poor performers' },
        { 'q': 'Percent of employees receiving performance appraisal' },
        { 'q': 'Percent of employees whose compensation is performance contingent' },
        { 'q': 'Percent of total salary at risk' },
        { 'q': 'Speed of salary action processing' },
        { 'q': 'Average merit increase granted by classification' },
        { 'q': 'Ratio of salary to competitor salary' },
        { 'q': 'Trends in health care costs to national averages' },
        { 'q': 'Extent to which measurement systems are seen as credible by the employees' },
        { 'q': 'Labor costs per revenue rupee' }
      ]
    },
    {
      'head': 'Safety and Health',
      'question': [
        { 'q': 'Lost work days' },
        { 'q': 'Almost lost work days' },
        { 'q': 'Cost of injuries' },
        { 'q': 'Incidence of injuries' },
        { 'q': 'Percent of employees who are involved in wellness programs' },
        { 'q': 'Trends in workforce illness' }
      ]
    },
    {
      'head': 'Labour Relations',
      'question': [
        { 'q': 'Percent of unionized employees on problem solving' },
        { 'q': 'Number of joint labor management problem-solving teams' },
        { 'q': 'Frequency of labor and management leadership interaction' },
        { 'q': 'Diversity of agreements' },
        { 'q': 'Number of nontraditional involvements of unionized workforce' },
        { 'q': 'Differences between employee and management perceptions of throughput and output effectiveness' }
      ]
    },
    {
      'head': 'Internal Communication',
      'question': [
        { 'q': 'Consistency and clarity of messages from top management and from HR' },
        { 'q': 'Understanding of messages from top management and from HR' },
        { 'q': 'Acceptance of messages from management and HR' },
        { 'q': 'Effectiveness of information sharing among departments' },
        { 'q': 'Effectiveness of HR mediation between employees and management' },
        { 'q': 'Speed and effectiveness of responses to employee complaints' },
        { 'q': 'Average time for dispute resolution' },
        { 'q': 'Percent employees making suggestions' },
        { 'q': 'Percent of suggestions implemented' }
      ]
    },
    {
      'head': 'Diversity',
      'question': [
        { 'q': 'Perception of consistent and equitable treatment of all employees' },
        { 'q': 'Compliance with technical requirements of affirmative action' },
        { 'q': 'Degree of objectivity and neutrality in rewards and promotions' },
        { 'q': 'Percent of nontraditional workers in applicant pool' },
        { 'q': 'Average age of workforce' }
      ]
    },
  ];

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownFirst: Boolean = false;
  public isModalShownSecont: Boolean = false;
  public isModalShownThired: Boolean = false;
  public isModalShownFourth: Boolean = false;
 public activeclass: any[] = [
   'active',
   '',
   '',
   '',
   '',
   '',
   '',
 ];
  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    private hrindexService: HrindexService,

  ) {
    let j = 0;
    for (const prop of this.questions) {
      this.question[j] = [];
      (j === 0) ? this.section[j] = true : this.section[j] = false;
      let i = 0;
      for (const props of prop.question) {
        this.question[j][i] = '';
        console.log(props);
        i++;
      }
      j++;
    }
  }

  getStaffing() {
    this.options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'HR Index Score'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: [
          'Staffing',
          'Training & Development',
          'Performance Systems',
          'Safety and Health',
          'Labour Relations',
          'Internal Communication',
          'Diversity'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Score',
        data: this.staffing

      }]
    };
  }

  ngOnInit() {
  }

  staffingForm() {
    const k: any = [];
    for (let j = 0; j < this.question.length; j++) {
      let m = 0;
      for (let i = 0; i < this.question[j].length; i++) {
        m = m + parseInt(this.question[j][i], 10);
      }
      k.push(m);
    }
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
    this.updatehrIndex();
  }

  // closeThird() {
  //   this.onHidden('t');
  // }

  closeFourth() {
    this.onHidden('fo');
  }

  updatehrIndex() {
    const fieldhrindex = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      designation: this.designation,
      companyname: this.companyname,
      industry: this.industry,
      status: true,
      staffing: this.staffing[0],
      traininganddevelopment: this.staffing[1],
      performancesystems: this.staffing[2],
      safetyandhealth: this.staffing[3],
      labourrelations: this.staffing[4],
      internalcommunication: this.staffing[5],
      diversity: this.staffing[6],
      hrindexid: this.hrindexid
    };
    this.hrindexService.addHrIndex(fieldhrindex)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          console.log(res.data);
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  showNext(i: number) {
    let j = 0;
    if (i === (this.questions.length - 1)) {
      this.staffingForm();
      return false;
    }
    for (const prop of this.questions) {
      (j === i) ? this.section[j] = true : this.section[j] = false;
      (j <= i) ? this.activeclass[j] = 'active' : this.activeclass[j] = '';
      console.log(prop.head);
      j++;
    }
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
          this.hrindexid = res.data._id;
          this.openThird();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }
}
