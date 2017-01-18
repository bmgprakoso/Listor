import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodoStartComponent } from './todos/todo-start.component';
import {TodoService} from "./todos/todo.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
