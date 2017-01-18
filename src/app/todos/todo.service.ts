import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo('Test Ruma', 'Tes Ruma di Rumah', 'hari ini', 'besok', 'tinggi'),
      new Todo('Test Ruma', 'Tes Ruma di Rumah', 'hari ini', 'besok', 'tinggi')
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
}
