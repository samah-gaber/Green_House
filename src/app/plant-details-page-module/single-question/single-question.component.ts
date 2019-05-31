import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @Input() question;
  replyCount: number;
  constructor() { }

  ngOnInit() {
    this.replyCount = this.question.answers.length;
  }

}
