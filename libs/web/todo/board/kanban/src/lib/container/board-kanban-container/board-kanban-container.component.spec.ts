import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardKanbanContainerComponent } from './board-kanban-container.component';

describe('BoardKanbanContainerComponent', () => {
  let component: BoardKanbanContainerComponent;
  let fixture: ComponentFixture<BoardKanbanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardKanbanContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardKanbanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
