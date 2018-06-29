import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-movies-now-playing',
  templateUrl: './movies-now-playing.component.html',
  styleUrls: ['./movies-now-playing.component.scss']
})
export class MoviesNowPlayingComponent implements OnInit {
  public moviesNowPlaying: any[];
  public allMoviesGenres: any[];
  public isTheMouseOverPosterArray:Array<boolean>;

  constructor(
    private movieService: MovieService,
    private genresService: GenresService
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
   }

  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe(
      (data) => {
        this.moviesNowPlaying = data;

        this.moviesNowPlaying.forEach(element => {
          this.isTheMouseOverPosterArray.push(false);
        });
      }
    );

    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
        console.log(this.allMoviesGenres);
      }
    );
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }
}
