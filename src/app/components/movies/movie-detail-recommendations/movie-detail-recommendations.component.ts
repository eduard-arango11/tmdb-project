import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-recommendations',
  templateUrl: './movie-detail-recommendations.component.html',
  styleUrls: ['./movie-detail-recommendations.component.scss']
})
export class MovieDetailRecommendationsComponent implements OnInit {
  
  private movieRecommendations;

  @Input() public movieId;
  @Output() newMovieId = new EventEmitter();

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovieRecommendations(this.movieId).subscribe(
      (data) => {
        this.movieRecommendations= data;
      }
    );
  }

  chageMovie(id) {
    this.newMovieId.emit(id);
    this.movieService.getMovieRecommendations(id).subscribe(
      (data) => {
        this.movieRecommendations= data;
      }
    );
  }

}
