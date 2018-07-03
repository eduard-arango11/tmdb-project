// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components imports
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { PersonDetailComponent } from './components/people/person-detail/person-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/detail/:id',
    component: MovieDetailComponent
  },
  {
    path: 'person/detail/:id',
    component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
