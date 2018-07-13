import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import { MovieService } from '../../../services/movie.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public moviesList: any[];
  public allMoviesGenres: any[];
  public isTheMouseOverPosterArray:Array<boolean>;
  public title:string;

  //Paginator
  public currentPage:number;
  public currentCategory:string;
  public totalResults:number;
  public totalPages:number;

  public sub: any; 

  constructor(
    private movieService: MovieService,
    private genresService: GenresService,
    private route: ActivatedRoute
  ) {
    this.isTheMouseOverPosterArray = new Array<boolean>();
    this.allMoviesGenres = new Array<any>();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.currentCategory = params['category'];
        this.currentPage = 1;
        this.paginator.firstPage(); //when the user select a category of movies (popular, upcoming, etc.) the function onInit is called and the paginator starts in the first page.
        this.getMoviesList(this.currentCategory,this.currentPage); 
      })
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }

  changePage(event){
    this.currentPage = event.pageIndex + 1;
    this.getMoviesList(this.currentCategory,this.currentPage);
  }

  getMoviesList(category:string,page:number) {
    switch (category) {
      case 'now_playing':
        this.movieService.getNowPlayingMovies(page).subscribe(
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
        this.movieService.getTopRatedMovies(page).subscribe(
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
        this.movieService.getPopularMovies(page).subscribe(
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
        this.movieService.getUpcomingMovies(page).subscribe(
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
        let genreId
        this.genresService.getAllMoviesGenres().subscribe(
          (data) => {
            this.allMoviesGenres = data;
            //the code below is for get the genre id of the genre name in the url
            this.allMoviesGenres.forEach(element => {
              if (element.name === category) {
                genreId = element.id;
              }
            });
            
            //the code below is for get all the movies of the genre in the url
            this.movieService.getMoviesOfGenre(genreId,page).subscribe(
              (data) => {
                this.moviesList = data;
                this.totalPages = this.moviesList[0].total_pages;
                this.totalResults = this.moviesList[0].total_results;
        
                this.moviesList.forEach(element => {
                  this.isTheMouseOverPosterArray.push(false);
                });
              }
            );
            this.title=category + " Movies";
          }
        );
        break;
    }
  }
}

