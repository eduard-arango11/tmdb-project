import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailMoviesComponent } from './person-detail-movies.component';

describe('PersonDetailMoviesComponent', () => {
  let component: PersonDetailMoviesComponent;
  let fixture: ComponentFixture<PersonDetailMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
