import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import { SearchService } from '../../../services/search.service';
import { GenresService } from '../../../services/genres.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginatorMovies: MatPaginator;
  @ViewChild(MatPaginator) paginatorPeople: MatPaginator;
  public moviesFound;
  public peopleFound;
  public sub: any;
  public allMoviesGenres: any[];

  //Paginator of Movies
  public currentQuery:string;

  public currentPageMovies:number;
  public totalResultsMovies:number;
  public totalPagesMovies:number;

  //Paginator of People
  public currentPagePeople:number;
  public totalResultsPeople:number;
  public totalPagesPeople:number;

  constructor(
    private searchService: SearchService,
    private genresService: GenresService,
    private route: ActivatedRoute,
  ) { 
    this.allMoviesGenres = new Array<any>();
  }

  ngOnInit() {
    this.getListOfGenres();
    this.sub = this.route.params.subscribe(
      params => {
        this.currentQuery = params['query'];
        this.currentPageMovies = 1;
        this.currentPagePeople = 1;
        this.getMovies(this.currentQuery,this.currentPageMovies);
        this.getPeople(this.currentQuery,this.currentPagePeople);
      }
    )
  }

  getMovies(query:string,page:number){
    if (query !== "") {
      this.searchService.searchMovie(query,page).subscribe(
        (data) => {
          this.moviesFound= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
          if(this.moviesFound.length !== 0){
            this.totalPagesMovies = this.moviesFound[0].total_pages;
            this.totalResultsMovies = this.moviesFound[0].total_results;
          }
        }
      );
    }
  }

  getPeople(query:string,page:number){
    if (query !== "") {
      this.searchService.searchPerson(query,page).subscribe(
        (data) => {
          this.peopleFound= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
          if(this.peopleFound.length !== 0){
            this.totalPagesPeople = this.peopleFound[0].total_pages;
            this.totalResultsPeople = this.peopleFound[0].total_results;
          }
        }
      );
    }
  }

  changePageMovies(event){
    this.currentPageMovies = event.pageIndex + 1;
    this.getMovies(this.currentQuery,this.currentPageMovies);
  }

  changePagePeople(event){
    this.currentPagePeople = event.pageIndex + 1;
    this.getPeople(this.currentQuery,this.currentPagePeople);
  }

  getListOfGenres():void{
    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres = data;
      }
    );
  }

  getGenreName(id:string):string{
    let genreName;
    this.allMoviesGenres.forEach(element => {
      if (element.id === id) {
        genreName=element.name;
      }
    });
    return genreName;
  }

}
