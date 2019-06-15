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
  categories : any;
  // categories : Array<any>;
  currentLoadedQuestions : any;
  constructor(private forumService : ForumServiceService) {
    forumService.initiateInitForumRequest().subscribe((initForumData) => {
      console.log(initForumData);
      this.categories = initForumData;
      this.model=this.categories.categories[0].name;
      this.currentLoadedQuestions = initForumData;
    })
  }

  ngOnInit() {

  }

  toggle(catId){
    this.forumService.getCategoryQuestions(catId).subscribe((newCatQuestions)=>{
      this.currentLoadedQuestions = newCatQuestions;
    });

  }
}
