import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-person-detail-movies',
  templateUrl: './person-detail-movies.component.html',
  styleUrls: ['./person-detail-movies.component.scss']
})
export class PersonDetailMoviesComponent implements OnInit {

  private personMovies;

  @Input() public personId;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPersonMovies(this.personId).subscribe(
      (data) => {
        this.personMovies= data;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.peopleService.getPersonMovies(this.personId).subscribe(
      (data) => {
        this.personMovies= data;
      }
    );
  }

}
