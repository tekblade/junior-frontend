import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';

import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ErrorComponent } from './error/error.component';
import {MatListModule} from '@angular/material/list';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MatMenuComponent,
    MainComponent,
    PostsComponent,
    TodoComponent,
    PostDetailsComponent,
    ErrorComponent,
    TodoListItemComponent,
  ],
  imports: [
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
