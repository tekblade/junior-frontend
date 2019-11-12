import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { ShareInfoTitleService } from '../share-info-title.service';
import { ShareInfoBodyService } from '../share-info-body.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  indexOfPost;
  titles = [];
  bodies = [];

  subscription: Subscription;
  renderPost:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private getData:GetPostsService) {}
  

  ngOnInit() {
    this.getData.getPosts().subscribe(postsArray => { 
      for(let key in postsArray){
        let value=postsArray[key];
        console.log(value);
        if(value.userId===this.getData.USERID){
          this.titles.push(value.title);
          this.bodies.push(value.body);  
        }
      }
      // console.log(this.titles);
    });   
    this.indexOfPost=this.activatedRoute.snapshot.paramMap.get("id");

  }
}
