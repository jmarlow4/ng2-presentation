import {Component, Input} from '@angular/core';
import {TodoItem} from "../todo-item";
import {TodoService} from "../todo.service";

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item media">
      <div class="media-content">
        <div class="content">
          <div class="todo-text">
            {{item.text}}
          </div>
        </div>
      </div>
      <div class="media-right">
        <button 
        class="button is-white"
        (click)="deleteItem(index)">
          <i class="icon icon-close"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .todo-item {
      margin: 5px 0;
      border: 1px solid grey;
      border-radius: 3px;
      padding: 8px;
      align-items: center;
    }
    .content .todo-text {
      font-size: 18px;
    }
  `]
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Input() index: number;

  constructor(private todoService: TodoService) {}

  deleteItem(index) {
    this.todoService.deleteItem(index);
  }
}
