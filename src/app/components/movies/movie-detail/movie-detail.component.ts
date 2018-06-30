import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie;
  public movieBackdropsImages;
  private sub: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id:number = +params['id'];
        this.movieService.getMovieDetail(id).subscribe(
          (data) => {
            this.movie= data;
            console.log(this.movie);
          }
        );

        this.movieService.getMovieImages(id).subscribe(
          (data) => {
            this.movieBackdropsImages= data;
            console.log(this.movieBackdropsImages);
          }
        );
      }
    )
  }

}
