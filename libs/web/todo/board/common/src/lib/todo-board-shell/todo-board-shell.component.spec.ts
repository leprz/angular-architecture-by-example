import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardShellComponent } from './todo-board-shell.component';

describe('TodoBoardShellComponent', () => {
  let component: TodoBoardShellComponent;
  let fixture: ComponentFixture<TodoBoardShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBoardShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBoardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
