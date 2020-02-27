import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      "is-completed": this.todo.complated
    }
    return classes;
  }

  onChange() {
    this.todo.complated = !this.todo.complated;
    this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo))
  }

  onDelete() {
    this.deleteTodo.emit(this.todo);
  }

}
