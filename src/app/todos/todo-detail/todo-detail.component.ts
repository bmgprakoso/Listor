import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {Subscription} from "rxjs";
import {TodoService} from "../todo.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {
  selectedTodo: Todo;
  private todoIndex: number;
  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.todoIndex = params['id'];
          this.selectedTodo = this.todoService.getTodo(this.todoIndex);
        }
    );
  }

  onEdit() {
    this.router.navigate(['/todo', this.todoIndex, 'edit']);
  }

  onDelete() {
    this.todoService.deleteTodo(this.selectedTodo);
    this.router.navigate(['/todo']);
  }

  onDestroy() {
    this.subscription.unsubscribe();
  }

}
