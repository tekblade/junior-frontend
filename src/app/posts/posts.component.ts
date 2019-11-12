import { Component, OnInit, Input } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { post } from 'selenium-webdriver/http';
import { Router }  from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { fromEventPattern } from 'rxjs';
import { ShareInfoTitleService } from '../share-info-title.service';
import { ShareInfoBodyService } from '../share-info-body.service';


export interface checkPost {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  showPosts: checkPost[] = [];
  body=[];
  titles=Array();
  postDetailsClicked=false;
  @Input() help;
  constructor(private getData: GetPostsService, private router: Router,private getSharedTitles:ShareInfoTitleService, private getSharedBodies: ShareInfoBodyService) { }
  ngOnInit() {

    let checkColor=0;
    this.getData.getPosts().subscribe(postsArray => {
      for(let key in postsArray){
        let value = postsArray[key];
        let colorHelp
        if(checkColor%2===0)
          colorHelp='lightblue';
        else
          colorHelp='lightgreen';
        if(value.userId===this.getData.USERID){
          this.showPosts.push({color:colorHelp,cols:3,rows:1,text:value.title});
          this.body.push(value.body);
          this.titles.push(value.title);
        }       
        checkColor++;
      }

    });
    this.getSharedBodies.subject.next(this.body);
    this.getSharedTitles.subject.next(this.titles);
  }
  postDetailsClick(indexOfPost){
    this.router.navigate(['/post-details', indexOfPost]);
    
  }

  // sendTitles(): void {
  //   this.getSharedTitles.sendMessage(this.titles);
  // }
  // sendBodies(): void {
  //   this.getSharedBodies.sendMessage(this.body);
  // }

}
