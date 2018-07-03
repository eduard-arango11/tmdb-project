import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailImagesComponent } from './person-detail-images.component';

describe('PersonDetailImagesComponent', () => {
  let component: PersonDetailImagesComponent;
  let fixture: ComponentFixture<PersonDetailImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
