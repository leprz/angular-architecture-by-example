import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@todo/web/todo/board/kanban').then((m) => m.WebTodoBoardKanbanModule)
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('@todo/web/todo/board/basic').then((m) => m.WebTodoBoardBasicModule)
  }
]
