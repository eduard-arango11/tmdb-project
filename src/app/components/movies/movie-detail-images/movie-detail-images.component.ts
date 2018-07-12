import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-images',
  templateUrl: './movie-detail-images.component.html',
  styleUrls: ['./movie-detail-images.component.scss']
})
export class MovieDetailImagesComponent implements OnInit {
  public movieBackdropsImages;
  public moviePostersImages;

  @Input() public movieId;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.serviceCall();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.serviceCall();
  }

  serviceCall(){
    this.movieService.getMovieImagesBackdrops(this.movieId).subscribe(
      (data) => {
        this.movieBackdropsImages= data;
      }
    );

    this.movieService.getMovieImagesPosters(this.movieId).subscribe(
      (data) => {
        this.moviePostersImages= data;
      }
    );
  }

}
