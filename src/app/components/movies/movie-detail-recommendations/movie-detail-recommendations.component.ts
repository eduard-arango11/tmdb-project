import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-recommendations',
  templateUrl: './movie-detail-recommendations.component.html',
  styleUrls: ['./movie-detail-recommendations.component.scss']
})
export class MovieDetailRecommendationsComponent implements OnInit {
  
  public movieRecommendations;

  @Input() public movieId;
  @Output() newMovieId:EventEmitter<any> = new EventEmitter();

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.serviceCall(this.movieId);
  }

  chageMovie(id) {
    this.newMovieId.emit(id); //the movie id of the remmended movie selected is emited to the movie detail for display the detail of that movie.
    this.serviceCall(id);
  }

  serviceCall(id:number){
    this.movieService.getMovieRecommendations(id).subscribe(
      (data) => {
        this.movieRecommendations= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
      }
    );
  }

}
