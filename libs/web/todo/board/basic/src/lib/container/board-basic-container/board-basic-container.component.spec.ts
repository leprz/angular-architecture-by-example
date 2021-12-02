import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBasicContainerComponent } from './board-basic-container.component';

describe('BoardBasicContainerComponent', () => {
  let component: BoardBasicContainerComponent;
  let fixture: ComponentFixture<BoardBasicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBasicContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBasicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
