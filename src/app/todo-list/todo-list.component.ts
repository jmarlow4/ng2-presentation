import {Component, Input} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'todo-list',
  template: `
    <div [dragula]="'todo-bag'">
      <todo-item 
      *ngFor="let item of items; let i = index" 
      [item]="item"
      [index]="i">
      </todo-item>
    </div>
  `,
  styles: []
})
export class TodoListComponent {
  @Input() items: TodoItem[];
}
