import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movies-top-rated',
  templateUrl: './movies-top-rated.component.html',
  styleUrls: ['./movies-top-rated.component.scss']
})
export class MoviesTopRatedComponent implements OnInit {

  public moviesTopRated: any[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(
      (data) => {
        console.log(data);
        this.moviesTopRated = data;
      }
    );
  }

}
