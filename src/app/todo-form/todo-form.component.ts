import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'todo-form',
  template: `
    <form [formGroup]="createItemForm" (ngSubmit)="onCreateItem()">
      <div class="control has-addons">
        <input 
        formControlName="text" 
        class="input" 
        type="text" 
        placeholder="What needs to be done?">
        <button class="button is-primary" type="submit">
          <i class="icon icon-plus"></i>
        </button>
      </div>
    </form>
  `,
  styles: [`
    .control.has-addons .input {
      width: 100%;
    }
    .button .icon:last-child {
      margin-left: 0;
      margin-top: 2px;
    }
  `]
})
export class TodoFormComponent implements OnInit{

  private createItemForm: FormGroup;
  @Output() newItemCreated = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createItemForm = this.fb.group({
      text: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  onCreateItem() {
    this.newItemCreated.emit(this.createItemForm.value);
    this.createItemForm.reset();
  }
}
