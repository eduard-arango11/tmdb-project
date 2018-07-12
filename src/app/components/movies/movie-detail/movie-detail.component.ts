import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movieId;
  public movie;
  public movieVideos:Array<any>;
  
  public movieTailer;
  public safeURLTrailer;
  public sub: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { 
    this.movieVideos = new Array<any>();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.movieId = +params['id'];
        let id:number = +params['id'];
        this.movieService.getMovieDetail(id).subscribe(
          (data) => {
            this.movie= data;
          }
        );

        this.movieService.getMovieVideos(id).subscribe(
          (data) => {
            this.movieVideos= data;
            this.getTrailer(this.movieVideos);
            if(this.movieTailer){
              this.safeURLTrailer = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.movieTailer.key + "?rel=0");
            }
          }
        );

        //window.scrollTo(0, 0);
      }
    )
  }

  getTrailer(videos:Array<any>){
    this.movieTailer = null; // if don't assign null, when user clic a movie in recommendations the new movie can come without trailer and movieTrailer would stay with the trailer of the past movie.
    for(let element of videos){
      if (element.type === 'Trailer') {
        this.movieTailer = element;
      }
    }
  }

  ListenChild(event){
    this.movieId = event;
  }
}
