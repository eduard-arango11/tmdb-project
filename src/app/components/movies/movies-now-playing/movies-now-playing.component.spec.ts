import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNowPlayingComponent } from './movies-now-playing.component';

describe('MoviesNowPlayingComponent', () => {
  let component: MoviesNowPlayingComponent;
  let fixture: ComponentFixture<MoviesNowPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesNowPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
