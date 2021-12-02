import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoShellComponent } from './todo-shell/todo-shell.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.route";

@NgModule({
  declarations: [AppComponent, TodoShellComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
