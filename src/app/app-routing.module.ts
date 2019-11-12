import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { PostDetailsComponent } from './post-details/post-details.component'
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path: '', redirectTo:'/main', pathMatch:'full'}, 
  {path: 'main', component: MainComponent}, 
  {path:'post-details/:id',component: PostDetailsComponent }, 
  {path: 'posts',component: PostsComponent},
  {path: 'todo',component: TodoComponent},
  {path: '**', component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
