import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) { }

  getTopRatedMovies () {
    return this.http
      .get(this.baseUrl + "top_rated" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity,
                overview: item.overview
              }
            });
          }
        )
      );
  }
  
  getPopularMovies () {
    return this.http
      .get(this.baseUrl + "popular" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity,
                overview: item.overview
              }
            });
          }
        )
      );
  }

  getNowPlayingMovies () {
    return this.http
      .get(this.baseUrl + "now_playing" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity,
                overview: item.overview
              }
            });
          }
        )
      );
  }

  getUpcomingMovies () {
    return this.http
      .get(this.baseUrl + "upcoming" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity,
                overview: item.overview
              }
            });
          }
        )
      );
  }

  getSimilarMovies (idMovie:number) {
    return this.http
      .get(this.baseUrl + idMovie +"/similar" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                poster_path: item.poster_path,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity
              }
            });
          }
        )
      );
  }

  getMovieDetail(idMovie:number){
    return this.http
      .get(this.baseUrl + idMovie +this.apiKey)
      .pipe(
        map(
          (response: any) => {
              return {
                id: response.id,
                title: response.title,
                poster_path: response.poster_path,
                vote_count: response.vote_count,
                vote_average: response.vote_average,
                popularity: response.popularity,
                release_date: response.release_date,
                overview: response.overview,
                genres: response.genres,
                production_companies: response.production_companies,
                production_countries: response.production_countries,
                spoken_languages: response.spoken_languages,
                status: response.status
              }
          }
        )
      );
  }

  getMovieImagesBackdrops(idMovie:number){
    return this.http
      .get(this.baseUrl + idMovie + "/images" + this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.backdrops.map((item)=>{
              return {
                file_path: item.file_path,
                height: item.height,
                width: item.width,
                vote_count: item.vote_count,
                vote_average: item.vote_average
              }
            });
          }
        )
      );
  }

  getMovieImagesPosters(idMovie:number){
    return this.http
      .get(this.baseUrl + idMovie + "/images" + this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.posters.map((item)=>{
              return {
                file_path: item.file_path,
                height: item.height,
                width: item.width,
                vote_count: item.vote_count,
                vote_average: item.vote_average
              }
            });
          }
        )
      );
  }
}
