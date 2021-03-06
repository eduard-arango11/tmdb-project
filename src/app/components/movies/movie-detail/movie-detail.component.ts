import { Component, OnInit } from '@angular/core';
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

  public backDropImage:string;

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
            if (this.movie.backdrop_path) {
              this.backDropImage='https://image.tmdb.org/t/p/original'+ this.movie.backdrop_path;
            }
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

  /* This function convert the runtime (only minutes) to duration format (hours and minutes) */
  convertDuration(runtime:number):string{
    let duration:string;
    if(runtime>60){
      duration= Math.floor(runtime / 60) + " h";
      if((runtime % 60) !== 0 ){
        duration += " "+ (runtime % 60) + " min";
      }
    }else{
      duration= runtime + " min";
    }
    return duration;
  }

  ListenChild(event){
    this.movieId = event;
  }
}
