import { Component, OnInit, Input, ChangeDetectorRef, OnChanges,SimpleChanges,ViewChild, ComponentFactoryResolver } from '@angular/core';
import { UserTodos } from '../user-todos';
import { TodoTableRow } from '../todo-table-row';
import { BehaviorSubject } from 'rxjs';
import { MatTable } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

 
export class TodoListItemComponent implements OnInit,OnChanges {
  public dataSource: TodoTableRow[] = [];
  displayedColumns:string[] = ['title','completed','buttonEdit','buttonDelete'];
  @ViewChild(MatTable, {static:true}) table: MatTable<any>;
  showUserTodos:UserTodos[];
  @Input() userTodos:UserTodos[];
  checkIfActive=false;
  checkOutForm;
  isEdited=false;
  title = new FormControl('');

  choosedRow = new BehaviorSubject<UserTodos>(null);
  currentRow:UserTodos;


  indexOfCurrentRow:number=0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkOutForm = this.fb.group({
      title:this.title
     });
  }

  deleteRow(title){
    for(let key=0;key<this.userTodos.length;key++){   
      if(this.showUserTodos[key].title===title){
        this.showUserTodos.splice(key,1);
      }      
    }
    this.table.renderRows();
  }

  makeEditable(row){
    row.isEdited = !row.isEdited;
    let active=this.checkWhichIsActive();
    if(this.checkIfMoreThanOneActive()){
      row.isEdited = !row.isEdited;
    }
    
    
    

  }
  
  checkIfMoreThanOneActive(){
    let counter:number=0;
    for(let i=0;i<this.showUserTodos.length;i++){
      if(this.showUserTodos[i].isEdited)
        counter++;
      if(counter>1)
       return true;
    }
    return false;
  }
    
  checkWhichIsActive(){
    for(let i=0;i<this.showUserTodos.length;i++){
      if(this.showUserTodos[i].isEdited)
        return this.showUserTodos[i];
    }
  }
     
  extractFormValues(){   
    for(let i=0;i<this.showUserTodos.length;i++){
      if(this.showUserTodos[i].isEdited)
        this.showUserTodos[i].title=this.checkOutForm.get('title').value;
    }
  }
  


  
  ngOnChanges() {
    if(this.userTodos.length!==0){
      this.showUserTodos=this.userTodos;
    } 
  }
}
