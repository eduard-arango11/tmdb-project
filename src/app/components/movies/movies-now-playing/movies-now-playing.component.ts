import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movies-now-playing',
  templateUrl: './movies-now-playing.component.html',
  styleUrls: ['./movies-now-playing.component.scss']
})
export class MoviesNowPlayingComponent implements OnInit {
  public moviesNowPlaying: any[];
  public base_url = "https://image.tmdb.org/t/p/w300/";

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe(
      (data) => {
        this.moviesNowPlaying = data;
      }
    );
  }
}
