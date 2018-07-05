import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  private moviesList: any[];
  private allMoviesGenres: any[];
  private isTheMouseOverPosterArray:Array<boolean>;
  private title:string;

  private listType:string;
  private sub: any; 

  constructor(
    private movieService: MovieService,
    private genresService: GenresService,
    private route: ActivatedRoute,
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let ty:string = params['category'];
        switch (ty) {
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
    )
    /*this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
      }
    );*/
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }
}
