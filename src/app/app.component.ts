import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<h1>{{ listName }}</h1>
    <div>Aucun élément</div>
    <ul>
      <li *ngFor='let todo of todos; let i = index; let first = first'>
        ({{i}}) {{todo}}  ,premier de la liste : {{first}}
      </li>
    </ul>
    <form (submit)='createTodo()'>
      <input type='text' name='todoLabel' [(ngModel)]='newTodo' />
      <button (submit)='createTodo()'>ajouter</button>
    </form>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  listName = 'Ma Todo List';
  todos: string[] =[];
  newTodo: string  = '';

  createTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
}
