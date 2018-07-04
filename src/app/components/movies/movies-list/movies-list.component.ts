import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  //@Input() public listType: string; //Can be now playing, popular, upcoming, or top rated movies.

  private listType:string;
  private sub: any; 

  constructor(
    private movieService: MovieService,
    private genresService: GenresService,
    private route: ActivatedRoute,
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
    //this.moviesFound = new Array<any>();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.listType = params['category'];
      }
    )
    console.log(this.listType);
    this.myFunction();
    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.myFunction();
  }

  myFunction(){
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
      default:
        break;
    }
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }
}
