import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-person-detail-images',
  templateUrl: './person-detail-images.component.html',
  styleUrls: ['./person-detail-images.component.scss']
})
export class PersonDetailImagesComponent implements OnInit {

  private personImages;

  @Input() public personId;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPersonImages(this.personId).subscribe(
      (data) => {
        this.personImages= data;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.peopleService.getPersonImages(this.personId).subscribe(
      (data) => {
        this.personImages= data;
      }
    );
  }

}
