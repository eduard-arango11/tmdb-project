import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-cast',
  templateUrl: './movie-detail-cast.component.html',
  styleUrls: ['./movie-detail-cast.component.scss']
})
export class MovieDetailCastComponent implements OnInit {
  
  private movieCast;

  @Input() public movieId;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieCast(this.movieId).subscribe(
      (data) => {
        this.movieCast= data;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.movieService.getMovieCast(this.movieId).subscribe(
      (data) => {
        this.movieCast= data;
      }
    );
  }

}
