import { ForumServiceService } from './../../services/forum-service.service';
import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {
  model: any;
  categories : Array<any>;
  currentLoadedQuestions : Array<any>;
  constructor(private forumService : ForumServiceService) {
    forumService.initiateInitForumRequest().subscribe((initForumData) => {
      this.categories = initForumData.categories;
      this.model=this.categories[0].name;
      this.currentLoadedQuestions = initForumData.questions;
    })
  }

  ngOnInit() {

  }

  toggle(event){
    this.forumService.getCategoryQuestions(event.target.value).subscribe((newCatQuestions)=>{
      this.currentLoadedQuestions = newCatQuestions.questions;
    });

  }
}
