import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailCrewComponent } from './movie-detail-crew.component';

describe('MovieDetailCrewComponent', () => {
  let component: MovieDetailCrewComponent;
  let fixture: ComponentFixture<MovieDetailCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
