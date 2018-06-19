import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopRatedComponent } from './movies-top-rated.component';

describe('MoviesTopRatedComponent', () => {
  let component: MoviesTopRatedComponent;
  let fixture: ComponentFixture<MoviesTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
