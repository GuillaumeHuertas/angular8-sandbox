import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<h1>{{ listName }}</h1>
    <div [hidden]='todos.length'>Aucun élément</div>
    <ul>
      <li *ngFor='let todo of todos; let i = index; let first = first'>
        <hr *ngIf='i>0'>
        ({{i}}) {{todo}}  : premier de la liste : {{first}}
            Recherche Google Associé :
        <a [href]='"http://google.fr/#q=" + todo'
        target='_blank'>{{todo}}</a>
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
