// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Teradata Covalent imports
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentPagingModule } from '@covalent/core/paging';

// Material & flex imports
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';


// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailCastComponent } from './components/movies/movie-detail-cast/movie-detail-cast.component';
import { MovieDetailCrewComponent } from './components/movies/movie-detail-crew/movie-detail-crew.component';
import { MovieDetailRecommendationsComponent } from './components/movies/movie-detail-recommendations/movie-detail-recommendations.component';
import { PersonDetailComponent } from './components/people/person-detail/person-detail.component';
import { PersonDetailMoviesComponent } from './components/people/person-detail-movies/person-detail-movies.component';
import { PersonDetailImagesComponent } from './components/people/person-detail-images/person-detail-images.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SearchComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailCastComponent,
    MovieDetailCrewComponent,
    MovieDetailRecommendationsComponent,
    PersonDetailComponent,
    PersonDetailMoviesComponent,
    PersonDetailImagesComponent,
    MainNavComponent,
    SearchResultsComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatChipsModule,
    MatExpansionModule,
    MatSelectModule,
    MatPaginatorModule,
    CovalentPagingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MovieDetailComponent, SearchComponent, HomeComponent,MoviesListComponent, MovieDetailCastComponent, MovieDetailCrewComponent, MovieDetailRecommendationsComponent, PersonDetailComponent, PersonDetailMoviesComponent, PersonDetailImagesComponent, SearchResultsComponent, PeopleListComponent]
})
export class AppModule { }
