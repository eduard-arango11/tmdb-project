import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailCastComponent } from './movie-detail-cast.component';

describe('MovieDetailCastComponent', () => {
  let component: MovieDetailCastComponent;
  let fixture: ComponentFixture<MovieDetailCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
