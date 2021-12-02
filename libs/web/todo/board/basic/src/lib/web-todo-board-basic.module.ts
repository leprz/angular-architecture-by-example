import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardBasicContainerComponent } from './container/board-basic-container/board-basic-container.component';
import { BoardBasicComponent } from './ui/board-basic/board-basic.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: BoardBasicContainerComponent}])],
  declarations: [
    BoardBasicContainerComponent,
    BoardBasicComponent
  ]
})
export class WebTodoBoardBasicModule {
}
