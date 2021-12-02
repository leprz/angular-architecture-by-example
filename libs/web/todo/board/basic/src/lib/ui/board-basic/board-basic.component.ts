import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-board-basic',
  templateUrl: './board-basic.component.html',
  styleUrls: ['./board-basic.component.scss']
})
export class BoardBasicComponent implements OnInit {
  createTaskForm: any = {};
  todo: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onTodoFormSubmit() {

  }

  onTodoItemCheckboxChange(id: any) {

  }

  onTodoItemRemoveClick(id: any) {

  }

  onDoneItemCheckboxChange(id: any) {

  }

  onDoneItemRemoveClick(id: any) {

  }
}
