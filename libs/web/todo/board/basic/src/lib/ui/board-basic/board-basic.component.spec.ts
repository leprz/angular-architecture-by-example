import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBasicComponent } from './board-basic.component';

describe('BoardBasicComponent', () => {
  let component: BoardBasicComponent;
  let fixture: ComponentFixture<BoardBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
