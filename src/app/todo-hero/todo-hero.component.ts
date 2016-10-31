import { Component } from '@angular/core';

@Component({
  selector: 'todo-hero',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered">
          {{title}}
        </h1>
        <div class="control">
          <input class="input" [(ngModel)]="title" type="text">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .control {
      text-align: center;
    }
    .input {
      background: transparent;
      color: white;
      text-align: center;
      width: 25%;
    }
    @media (max-width: 768px) {
      .input {
        width: 50%;
      }
    }
  `]
})
export class TodoHeroComponent {

  title: string;

  constructor() {
    this.title = 'Angular 2-do!'
  }

}
