import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  
  public baseUrl: string = "https://api.themoviedb.org/3/genre/";
  public apiKey: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) { }

  getAllMoviesGenres () {
    return this.http
      .get(this.baseUrl + "movie/list" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.genres.map((item)=>{
              return {
                id: item.id,
                name: item.name
              }
            });
          }
        )
      );
  }

}
