import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent, Todo } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authenticationGuard } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent , canActivate: [authenticationGuard()]},
  { path: 'todos', component: ListTodosComponent, canActivate: [authenticationGuard()] },
  { path: 'logout', component: LogoutComponent, canActivate: [authenticationGuard()] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [authenticationGuard()] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
