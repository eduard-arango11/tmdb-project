import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseUrl: string = "https://api.themoviedb.org/3/movie/";
  public apiKey: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) { }

  getTopRatedMovies (page:number) {
    return this.http
      .get(this.baseUrl + "top_rated" +this.apiKey + '&page=' + page)
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
                overview: item.overview,
                release_date: item.release_date,
                total_pages: response.total_pages,
                total_results: response.total_results
              }
            });
          }
        )
      );
  }
  
  getPopularMovies (page:number) {
    return this.http
      .get(this.baseUrl + "popular" +this.apiKey + '&page=' + page)
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
                overview: item.overview,
                release_date: item.release_date,
                total_pages: response.total_pages,
                total_results: response.total_results
              }
            });
          }
        )
      );
  }

  getNowPlayingMovies (page:number) {
    return this.http
      .get(this.baseUrl + "now_playing" +this.apiKey + '&page=' + page)
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
                overview: item.overview,
                release_date: item.release_date,
                total_pages: response.total_pages,
                total_results: response.total_results
              }
            });
          }
        )
      );
  }

  getUpcomingMovies (page:number) {
    return this.http
      .get(this.baseUrl + "upcoming" +this.apiKey + '&page=' + page)
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
                overview: item.overview,
                release_date: item.release_date,
                total_pages: response.total_pages,
                total_results: response.total_results
              }
            });
          }
        )
      );
  }

  getMovieRecommendations (idMovie:number) {
    return this.http
      .get(this.baseUrl + idMovie +"/recommendations" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                genre_ids: item.genre_ids,
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                release_date: item.release_date,
                vote_count: item.vote_count,
                vote_average: item.vote_average
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
                status: response.status,
                budget: response.budget,
                revenue: response.revenue,
                runtime: response.runtime
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

  getMovieVideos(idMovie:number) {
    return this.http
      .get(this.baseUrl + idMovie +"/videos" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                name: item.name,
                site: item.site,
                key: item.key,
                type: item.type,
                size: item.size
              }
            });
          }
        )
      );
  }

  getMovieCast(idMovie:number) {
    return this.http
      .get(this.baseUrl + idMovie +"/credits" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.cast.map((item)=>{
              return {
                id: item.id,
                character: item.character,
                gender: item.gender,
                name: item.name,
                profile_path: item.profile_path
              }
            });
          }
        )
      );
  }

  getMovieCrew(idMovie:number) {
    return this.http
      .get(this.baseUrl + idMovie +"/credits" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.crew.map((item)=>{
              return {
                id: item.id,  
                department: item.department,
                gender: item.gender,
                name: item.name,
                profile_path: item.profile_path,
                job: item.job
              }
            });
          }
        )
      );
  }
}
