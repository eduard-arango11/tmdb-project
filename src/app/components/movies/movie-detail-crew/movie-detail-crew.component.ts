import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-crew',
  templateUrl: './movie-detail-crew.component.html',
  styleUrls: ['./movie-detail-crew.component.scss']
})
export class MovieDetailCrewComponent implements OnInit {

  selected = 'All';
  public options: Array<string>;
  public movieCrew;

  @Input() public movieId;

  constructor(private movieService: MovieService) { 
    this.options = new Array<string>();
  }

  ngOnInit() {
    this.movieService.getMovieCrew(this.movieId).subscribe(
      (data) => {
        this.movieCrew= data;
        console.log(this.movieCrew, 'MovieCrew');
        
        //This is for fill variable options with all the departments in the service response:
        this.options.push('All');
        this.movieCrew.forEach(element => {
          if(this.options.includes(element.department) === false){
            this.options.push(element.department);
          }
        });
    
        console.log(this.options, 'opciones');
      }
    );
  }

}
