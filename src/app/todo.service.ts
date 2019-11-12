import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  urlTodos="https://jsonplaceholder.typicode.com/todos"
  urlUsers="https://jsonplaceholder.typicode.com/users";
  headers: HttpHeaders=new HttpHeaders()
  .set('Accept','application/json');
  constructor(private http: HttpClient) { }
  USER1_ID=1;
  USER2_ID=2;
  USER3_ID=3;
  getUser(userId){
    return this.http.get(`${this.urlUsers}?id=${userId}`,{headers: this.headers});  
  }
  getTodoByUserId(userId){
    return this.http.get(`${this.urlTodos}?userId=${userId}`,{headers: this.headers});
  }
}
