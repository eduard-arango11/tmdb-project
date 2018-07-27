import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl: string = "https://api.themoviedb.org/3/search/";
  public apiKey: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d&query=";

  constructor(private http: HttpClient) { }

  searchMovie(term: string, page:number) {
    return this.http
      .get(this.baseUrl + 'movie' +  this.apiKey + term + '&page=' + page)
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
                genre_ids: item.genre_ids,
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

  searchPerson(term: string, page:number) {
    return this.http
      .get(this.baseUrl + 'person'  +  this.apiKey + term + '&page=' + page)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                name: item.name,
                profile_path: item.profile_path,
                known_for: item.known_for,
                popularity: item.popularity,
                total_pages: response.total_pages,
                total_results: response.total_results
              }
            });
          }
        )
      );
  }
}