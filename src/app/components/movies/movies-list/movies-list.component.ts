import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IPageChangeEvent} from '@covalent/core/paging';
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

  //Paginator
  public currentPage:number = 1;
  public currentCategory:string;
  public totalResults:number;
  public totalPages:number;
  public eventLinks: IPageChangeEvent;

  public listType:string;
  public sub: any; 

  constructor(
    private movieService: MovieService,
    private genresService: GenresService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.currentCategory = params['category'];
        this.currentPage = params['page'];
        this.getMoviesActualPage();
      })
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }

  //events for paginator

  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/movies',this.currentCategory, this.currentPage]);
    this.getMoviesActualPage();

  }

  getMoviesActualPage() {
    switch (this.currentCategory) {
      case 'now_playing':
        this.movieService.getNowPlayingMovies(this.currentPage).subscribe(
          (data) => {
            this.moviesList = data;
            this.totalPages = this.moviesList[0].total_pages;
            this.totalResults = this.moviesList[0].total_results;

            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Movies in Theatres";
        break;
      case 'top_rated':
        this.movieService.getTopRatedMovies(this.currentPage).subscribe(
          (data) => {
            this.moviesList = data;
            this.totalPages = this.moviesList[0].total_pages;
            this.totalResults = this.moviesList[0].total_results;

            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Top Rated Movies";
        break;
      case 'popular':
        this.movieService.getPopularMovies(this.currentPage).subscribe(
          (data) => {
            this.moviesList = data;
            this.totalPages = this.moviesList[0].total_pages;
            this.totalResults = this.moviesList[0].total_results;
    
            this.moviesList.forEach(element => {
              this.isTheMouseOverPosterArray.push(false);
            });
          }
        );
        this.title="Popular Movies";
        break;
      case 'upcoming':
        this.movieService.getUpcomingMovies(this.currentPage).subscribe(
          (data) => {
            this.moviesList = data;
            this.totalPages = this.moviesList[0].total_pages;
            this.totalResults = this.moviesList[0].total_results;
    
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
}
