import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoShellComponent } from './todo-shell/todo-shell.component';
import { RouterModule } from "@angular/router";
import { routes, todo } from "./app.route";
import { TodoRouteResolverInterface } from "@todo/web/todo/shared";

@NgModule({
  declarations: [AppComponent, TodoShellComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [{
    provide: TodoRouteResolverInterface,
    useFactory: () => (todo),
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
