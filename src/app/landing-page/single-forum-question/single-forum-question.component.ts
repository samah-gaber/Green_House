import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-single-forum-question',
  templateUrl: './single-forum-question.component.html',
  styleUrls: ['./single-forum-question.component.scss']
})
export class SingleForumQuestionComponent implements OnInit {
  @Input() question;
  replyCount: number;
  constructor() { }

  ngOnInit() {
    this.replyCount = this.question.answers.length;
  }

}
