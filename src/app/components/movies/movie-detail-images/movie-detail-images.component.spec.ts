import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailImagesComponent } from './movie-detail-images.component';

describe('MovieDetailImagesComponent', () => {
  let component: MovieDetailImagesComponent;
  let fixture: ComponentFixture<MovieDetailImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
