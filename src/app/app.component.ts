import { Component } from '@angular/core';
import {TodoService} from "./todo.service";
import {TodoItem} from "./todo-item";

@Component({
  selector: 'app-root',
  template: `
    <todo-hero></todo-hero>
    <section class="section">
      <div class="container">
        <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <todo-form (newItemCreated)="saveNewItem($event)"></todo-form>
          <br/>
          <todo-list [items]="todoItems"></todo-list>
        </div>
        </div>
      </div>
    </section>`,
  styles: []
})
export class AppComponent {

  todoItems: TodoItem[];

  constructor(private todoService: TodoService) {
    this.todoItems = todoService.getTodoItems();
  }

  saveNewItem(item) {
    this.todoService.saveItem(item);
  }
}
