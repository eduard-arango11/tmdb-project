import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-detail-videos',
  templateUrl: './movie-detail-videos.component.html',
  styleUrls: ['./movie-detail-videos.component.scss']
})
export class MovieDetailVideosComponent implements OnInit {
  public movieVideos:Array<any>;
  public safeVideosUrls:Array<any>;

  @Input() public movieId;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { 
    this.movieVideos = new Array<any>();
    this.safeVideosUrls = new Array<any>();
  }

  ngOnInit() {
    this.serviceCall();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.serviceCall();
  }

  serviceCall(){
    this.movieService.getMovieVideos(this.movieId).subscribe(
      (data) => {
        this.movieVideos= data;
        this.safeVideosUrls = new Array<any>();
        this.movieVideos.forEach(element => {
          let url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + element.key + "?rel=0");
          this.safeVideosUrls.push(url);
        });
      }
    );
  }

}
