import { Component, OnInit } from '@angular/core';
import { TodoRouteResolverInterface } from "@todo/web/todo/shared";

@Component({
  selector: 'todo-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.scss']
})
export class TodoShellComponent implements OnInit {

  constructor(readonly todoRoutes: TodoRouteResolverInterface) { }

  ngOnInit(): void {
  }

}
