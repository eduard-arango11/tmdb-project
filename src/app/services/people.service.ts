import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl: string = "https://api.themoviedb.org/3/person/";
  private apiKey: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) { }

  getPersonDetail(idPerson:number){
    return this.http
      .get(this.baseUrl + idPerson +this.apiKey)
      .pipe(
        map(
          (response: any) => {
              return {
                id: response.id,
                name: response.name,
                birthday: response.birthday,
                deathday: response.deathday,
                also_known_as: response.also_known_as,
                gender: response.gender,
                biography: response.biography,
                popularity: response.popularity,
                place_of_birth: response.place_of_birth,
                profile_path: response.profile_path
              }
          }
        )
      );
  }

  getPersonMovies(idPerson:number) {
    return this.http
      .get(this.baseUrl + idPerson +"/movie_credits" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.cast.map((item)=>{
              return {
                id: item.id,
                character: item.character,
                genre_ids: item.genre_ids,
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                backdrop_path: item.backdrop_path,
                release_date: item.release_date,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                popularity: item.popularity
              }
            });
          }
        )
      );
  }

  getPersonImages(idPerson:number) {
    return this.http
      .get(this.baseUrl + idPerson +"/images" +this.apiKey)
      .pipe(
        map(
          (response: any) => {
            return response.profiles.map((item)=>{
              return {
                width: item.width,
                height: item.height,
                vote_count: item.vote_count,
                vote_average: item.vote_average,
                file_path: item.file_path
              }
            });
          }
        )
      );
  }

  getPopularPeople (page:number) {
    return this.http
      .get(this.baseUrl + "popular" +this.apiKey + '&page=' + page)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((item)=>{
              return {
                id: item.id,
                profile_path: item.profile_path,
                name: item.name,
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
