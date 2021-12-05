import { Route } from "@angular/router";
import { TodoShellComponent } from "./todo-shell/todo-shell.component";
import { TodoRouteResolverInterface } from "@todo/web/todo/shared";

export class TodoRouteResolver extends TodoRouteResolverInterface {
  readonly basic: Route = {
    path: 'todo/basic',
    component: TodoShellComponent,
    loadChildren: () =>
      import('@todo/web/todo/board/basic').then((m) => m.WebTodoBoardBasicModule)
  };

  readonly kanban: Route = {
    path: 'todo/kanban',
    component: TodoShellComponent,
    loadChildren: () =>
      import('@todo/web/todo/board/kanban').then((m) => m.WebTodoBoardKanbanModule)
  };

  constructor() {
    super();
  }
}

export const todo = new TodoRouteResolver();

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: todo.basic.path
  },
  ...todo.routes()
]
