import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private movieId;
  private movie;
  private movieBackdropsImages;
  private moviePostersImages;
  private movieVideos:Array<any>;
  
  private movieTailer;
  private sub: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
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

        this.movieService.getMovieImagesBackdrops(id).subscribe(
          (data) => {
            this.movieBackdropsImages= data;
          }
        );
        
        this.movieService.getMovieImagesPosters(id).subscribe(
          (data) => {
            this.moviePostersImages= data;
          }
        );

        this.movieService.getMovieVideos(id).subscribe(
          (data) => {
            this.movieVideos= data;
            this.getTrailer(this.movieVideos);
          }
        );

        
        //window.scrollTo(0, 0);
      }
    )
  }

  /*ngOnChanges(changes: SimpleChanges){
    this.sub = this.route.params.subscribe(
      params => {
        this.movieId = +params['id'];
        let id:number = +params['id'];
    this.movieService.getMovieVideos(id).subscribe(
      (data) => {
        this.movieVideos= data;
        this.getTrailer(this.movieVideos);
      }
    );
    }
    );
  
  }*/

  getTrailer(videos:Array<any>){
    for(let element of videos){
      if (element.type === 'Trailer') {
        this.movieTailer = element;
      } else {
        this.movieTailer = false;
      }
    }
  }

  getSafeTrailer(key: string): any {
    //return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=1&rel=0');
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?&rel=0');
  }

  getSafeVideo(key: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }

  ListenChild(event){
    this.movieId = event;
    console.log(this.movieId, "movieId listened from child");
  }
}
