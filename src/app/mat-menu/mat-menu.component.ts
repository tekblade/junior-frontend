import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';


@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.css']
})
export class MatMenuComponent implements OnInit {
  userId;
  constructor(private getData: GetPostsService) { }

  ngOnInit() {
    this.userId=this.getData.USERID;
  }

}
