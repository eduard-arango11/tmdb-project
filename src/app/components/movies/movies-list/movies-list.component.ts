import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public moviesNowPlaying: any[];
  public allMoviesGenres: any[];
  public isTheMouseOverPosterArray:Array<boolean>;
  public title:string;

  @Input() public listType: string; //Can be now playing, popular, upcoming, or top rated movies.

  constructor(
    private movieService: MovieService,
    private genresService: GenresService
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
   }

  ngOnInit() {
    switch (this.listType) {
      case 'now_playing':
        this.movieService.getNowPlayingMovies().subscribe(
          (data) => {
            this.moviesNowPlaying = data;
    
            this.moviesNowPlaying.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Movies in Theatres";
        break;
      case 'top_rated':
        this.movieService.getTopRatedMovies().subscribe(
          (data) => {
            this.moviesNowPlaying = data;
    
            this.moviesNowPlaying.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Top Rated Movies";
        break;
      case 'popular':
        this.movieService.getPopularMovies().subscribe(
          (data) => {
            this.moviesNowPlaying = data;
    
            this.moviesNowPlaying.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Popular Movies";
        break;
      case 'upcoming':
        this.movieService.getUpcomingMovies().subscribe(
          (data) => {
            this.moviesNowPlaying = data;
    
            this.moviesNowPlaying.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Upcoming Movies in Theatres";
        break;
      default:
        break;
    }    

    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
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
