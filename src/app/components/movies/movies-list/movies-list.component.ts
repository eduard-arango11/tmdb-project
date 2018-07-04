import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public moviesList: any[];
  public allMoviesGenres: any[];
  public isTheMouseOverPosterArray:Array<boolean>;
  public title:string;

  @Input() public listType: string; //Can be now playing, popular, upcoming, or top rated movies.
  //@Input() public moviesFound;

  constructor(
    private movieService: MovieService,
    private genresService: GenresService
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
    //this.moviesFound = new Array<any>();
   }

  ngOnInit() {
    switch (this.listType) {
      case 'now_playing':
        this.movieService.getNowPlayingMovies().subscribe(
          (data) => {
            this.moviesList = data;
    
            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Movies in Theatres";
        break;
      case 'top_rated':
        this.movieService.getTopRatedMovies().subscribe(
          (data) => {
            this.moviesList = data;
    
            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Top Rated Movies";
        break;
      case 'popular':
        this.movieService.getPopularMovies().subscribe(
          (data) => {
            this.moviesList = data;
    
            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Popular Movies";
        break;
      case 'upcoming':
        this.movieService.getUpcomingMovies().subscribe(
          (data) => {
            this.moviesList = data;
    
            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Upcoming Movies in Theatres";
        break;
      /*case 'search':
        this.title="Results";
        break;*/
      default:
        break;
    }    

    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
      }
    );
  }

  /*ngOnChanges(changes: SimpleChanges) {
    this.moviesList = this.moviesFound;
    this.moviesList.forEach(element => {
      this.isTheMouseOverPosterArray.push(false);
    });
  }*/

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }
}
