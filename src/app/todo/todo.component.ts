import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserTodos } from '../user-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  userName1;
  name1;
  userName2;
  name2;
  userName3;
  name3
  user1Todos=[];
  user2Todos=[];
  user3Todos=[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
   this.todoService.getUser(this.todoService.USER1_ID).subscribe(user =>{
    for(let key in user){
      let value=user[key];
      this.userName1=value.username;
      this.name1=value.name;
    }
   });
   /////////////////////////////////////////////////////////////////////////////
   this.todoService.getUser(this.todoService.USER2_ID).subscribe(user =>{
    for(let key in user){
      let value=user[key];
      this.userName2=value.username;
      this.name2=value.name;
    }
   });
  //////////////////////////////////////////////////////////////////////////////////
  this.todoService.getUser(this.todoService.USER3_ID).subscribe(user =>{
    for(let key in user){
      let value=user[key];
      this.userName3=value.username;
      this.name3=value.name;
    }
   });
  
  this.todoService.getTodoByUserId(this.todoService.USER1_ID).subscribe(arrayOfTodos =>{
    let user=new UserTodos();
    this.user1Todos=[];
    for(let key in arrayOfTodos){
      let value=arrayOfTodos[key];
      user.id=value.id;
      user.completed=value.completed; 
      user.isEdited=false;
      user.title=value.title;
      user.userId=value.userId;  
      this.user1Todos.push(user);     
      user=new UserTodos();
    }
    
  });
  
  this.todoService.getTodoByUserId(this.todoService.USER2_ID).subscribe(arrayOfTodos =>{
    let user=new UserTodos();
    this.user2Todos=[];
    for(let key in arrayOfTodos){
      let value=arrayOfTodos[key];
      user.id=value.id;
      user.completed=value.completed; 
      user.isEdited=false;
      user.title=value.title;
      user.userId=value.userId;  
      this.user2Todos.push(user);     
      user=new UserTodos();
    }
  });

  this.todoService.getTodoByUserId(this.todoService.USER3_ID).subscribe(arrayOfTodos =>{
    let user=new UserTodos();
    this.user3Todos=[];
    for(let key in arrayOfTodos){
      let value=arrayOfTodos[key];
      user.id=value.id;
      user.completed=value.completed; 
      user.isEdited=false;
      user.title=value.title;
      user.userId=value.userId;  
      this.user3Todos.push(user);     
      user=new UserTodos();
    }
  });
}
}
