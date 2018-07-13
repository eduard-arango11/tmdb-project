import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  
  public allMoviesGenres: any[];
  public sub: any;

  constructor(
    private genresService: GenresService
  ) {
    this.allMoviesGenres = new Array<any>();
  }

  ngOnInit() {
    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        this.allMoviesGenres= data;
      }
    );
  }
  
}
