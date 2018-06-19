import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url: string = "https://api.themoviedb.org/3/search/api_key=0ca9ba5dc7030b0c10b24d60533cb44d&query=";
  private key: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d&query=";

  constructor(private http: HttpClient) { }

  searchMovie(term: string) {
    return this.http
      .get(this.url + 'movie?' + this.key + term)
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
                original_title: item.original_title
              }
            });
          }
        )
      );
  }
}