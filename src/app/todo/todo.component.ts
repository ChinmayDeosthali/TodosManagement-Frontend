import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER, BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  //id:number =''
  //todo = <Todo>{};

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());
  username : string = '';

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.username = JSON.stringify(sessionStorage.getItem(AUTHENTICATED_USER))


    if (this.id != -1) {

      this.todoService.retrieveTodo(this.username, this.id).subscribe((data) => {
        this.todo = data;
      });
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.addTodo(this.username, this.todo).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService
        .updateTodo(this.username, this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
