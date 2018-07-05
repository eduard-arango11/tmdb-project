import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-crew',
  templateUrl: './movie-detail-crew.component.html',
  styleUrls: ['./movie-detail-crew.component.scss']
})
export class MovieDetailCrewComponent implements OnInit {

  private selected = 'All';
  private options: Array<string>;
  private movieCrew;

  @Input() public movieId;

  constructor(private movieService: MovieService) { 
    this.options = new Array<string>();
  }

  ngOnInit() {
    this.serviceCall();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.options.push('All');
    this.serviceCall();
  }

  serviceCall(){
    this.movieService.getMovieCrew(this.movieId).subscribe(
      (data) => {
        this.movieCrew= data;
        
        //This is for fill variable options with all the departments in the service response:
        
        this.movieCrew.forEach(element => {
          if(this.options.includes(element.department) === false){
            this.options.push(element.department);
          }
        });
      }
    );
  }

}
