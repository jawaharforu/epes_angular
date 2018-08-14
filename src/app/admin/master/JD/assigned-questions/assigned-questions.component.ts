import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question/services/question.service';

@Component({
  selector: 'app-assigned-questions',
  templateUrl: './assigned-questions.component.html',
  styleUrls: ['./assigned-questions.component.scss']
})
export class AssignedQuestionsComponent implements OnInit {

  @Input() getjdid: String;
  public jdquestionList: any = '';

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
    this.getQuestionToJDList();
  }

  getQuestionToJDList() {
    this.questionService.getQuestionToJDListWithQu(this.getjdid)
      .subscribe(res => {
        this.jdquestionList = res.data;
      });
  }

}
