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

  public movieId;
  public movie;
  public movieBackdropsImages;
  public moviePostersImages;
  public movieVideos;
  private sub: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

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
          }
        );
        window.scrollTo(0, 0);
      }
    )
  }

  getSafeVideo(key: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }

  ListenChild(event){
    this.movieId = event;
    console.log(this.movieId, "movieId listened from child");
  }
}
