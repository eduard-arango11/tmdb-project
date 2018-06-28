import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPopularComponent } from './movies-popular.component';

describe('MoviesPopularComponent', () => {
  let component: MoviesPopularComponent;
  let fixture: ComponentFixture<MoviesPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
