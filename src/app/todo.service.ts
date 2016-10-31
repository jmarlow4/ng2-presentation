import { Injectable } from '@angular/core';
import { TodoItem } from "./todo-item";

// Mock Data
const TODO_ITEMS = [
  {text: 'Eat breakfast'},
  {text: 'Walk the dog'},
  {text: 'Go to work'},
]

@Injectable()
export class TodoService {

  private todoItems: TodoItem[];

  constructor() {
    this.todoItems = TODO_ITEMS;
  }

  getTodoItems() {
    return this.todoItems;
  }

  saveItem(item: TodoItem) {
    this.todoItems.unshift(item);
  }

  deleteItem(index: number) {
    this.todoItems.splice(index, 1);
  }

}
