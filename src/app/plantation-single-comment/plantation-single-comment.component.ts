import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plantation-single-comment',
  templateUrl: './plantation-single-comment.component.html',
  styleUrls: ['./plantation-single-comment.component.scss']
})
export class PlantationSingleCommentComponent implements OnInit {

  @Input() plantationComment;
  constructor() { }

  ngOnInit() {
   console.log(this.plantationComment);
  }

}
