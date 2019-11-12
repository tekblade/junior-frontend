import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { checkPost } from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  url="https://jsonplaceholder.typicode.com/posts";
  headers: HttpHeaders=new HttpHeaders()
    .set('Accept','application/json');
  constructor(private http: HttpClient,private getData:GetPostsService) { }
  getPosts(){
    return this.http.get(`${this.url}`,{headers: this.headers});
  }
  USERID=1;  //HERE to change the userID

}
