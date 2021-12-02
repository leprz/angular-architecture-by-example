import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardKanbanContainerComponent } from './container/board-kanban-container/board-kanban-container.component';
import { RouterModule } from "@angular/router";
import { BoardKanbanComponent } from './container/ui/board-kanban/board-kanban.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: BoardKanbanContainerComponent}])],
  declarations: [
    BoardKanbanContainerComponent,
    BoardKanbanComponent
  ],
})
export class WebTodoBoardKanbanModule {
}
