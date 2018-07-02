import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailRecommendationsComponent } from './movie-detail-recommendations.component';

describe('MovieDetailRecommendationsComponent', () => {
  let component: MovieDetailRecommendationsComponent;
  let fixture: ComponentFixture<MovieDetailRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
