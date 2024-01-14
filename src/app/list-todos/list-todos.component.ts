import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string = '';
  username : string = '';

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.username = JSON.stringify(sessionStorage.getItem(AUTHENTICATED_USER))
    //console.log('AUTHENTICATED_USER: '+ JSON.parse(sessionStorage.getItem(AUTHENTICATED_USER) || '{}'))
    //this.username = 'Joe';//JSON.parse(sessionStorage.getItem(AUTHENTICATED_USER) || '{}');
    this.refreshTodos();
  }

  refreshTodos() {
    

    this.todoService.retrieveAllTodos(this.username).subscribe((response) => {
      this.todos = response;
      console.log('response' + response);
    });
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`);

    this.todoService.deleteTodo(this.username, id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    });
  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
