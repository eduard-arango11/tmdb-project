import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-person-detail-movies',
  templateUrl: './person-detail-movies.component.html',
  styleUrls: ['./person-detail-movies.component.scss']
})
export class PersonDetailMoviesComponent implements OnInit {

  public personMovies;

  @Input() public personId;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPersonMovies(this.personId).subscribe(
      (data) => {
        this.personMovies= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.peopleService.getPersonMovies(this.personId).subscribe(
      (data) => {
        this.personMovies= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
      }
    );
  }

}
