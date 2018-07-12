import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailVideosComponent } from './movie-detail-videos.component';

describe('MovieDetailVideosComponent', () => {
  let component: MovieDetailVideosComponent;
  let fixture: ComponentFixture<MovieDetailVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
