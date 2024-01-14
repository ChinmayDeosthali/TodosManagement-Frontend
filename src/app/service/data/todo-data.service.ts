import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL, AWS_JPA_API_URL, DEV_JPA_API_URL, RAILWAY_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient,) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`${RAILWAY_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number){
    return this.http.delete(`${RAILWAY_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number){
    return this.http.get<Todo>(`${RAILWAY_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo:Todo){
    return this.http.put(`${RAILWAY_JPA_API_URL}/users/${username}/todos/${id}`, todo );
  }

  addTodo(username: string, todo:Todo){
    return this.http.post(`${RAILWAY_JPA_API_URL}/users/${username}/todos`, todo );
  }

}
