// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components imports
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { PersonDetailComponent } from './components/people/person-detail/person-detail.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies/now_playing',
    pathMatch: 'full'
  },
  {
    path: 'movie/detail/:id',
    component: MovieDetailComponent
  },
  {
    path: 'person/detail/:id',
    component: PersonDetailComponent
  },
  {
    path: 'search/:query',
    component: SearchResultsComponent
  },
  {
    path: 'movies/:category',
    component: MoviesListComponent
  },
  {
    path: 'people/popular',
    component: PeopleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
