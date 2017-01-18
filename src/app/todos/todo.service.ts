import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo('Test Ruma', 'Tes Ruma di Rumah', 'hari ini', 'besok', 'High'),
      new Todo('Tidur', 'Tidur di Rumah', 'hari ini', 'besok', 'Medium')
  ];

  constructor() { }

  getTodos(){
    return this.todos;
  }

  getTodo(id: number){
    return this.todos[id];
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(oldTodo: Todo, newTodo: Todo) {
    this.todos[this.todos.indexOf(oldTodo)] = newTodo;
  }

}
