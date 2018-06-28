// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Teradata Covalent imports
//import { CovalentLayoutModule } from '@covalent/core/layout';
//import { CovalentStepsModule  } from '@covalent/core/steps';

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

// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesTopRatedComponent } from './components/movies/movies-top-rated/movies-top-rated.component';
import { MoviesPopularComponent } from './components/movies/movies-popular/movies-popular.component';
import { MoviesNowPlayingComponent } from './components/movies/movies-now-playing/movies-now-playing.component';
import { MoviesUpcomingComponent } from './components/movies/movies-upcoming/movies-upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SearchComponent,
    HomeComponent,
    MoviesTopRatedComponent,
    MoviesPopularComponent,
    MoviesNowPlayingComponent,
    MoviesUpcomingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //CovalentLayoutModule,
    //CovalentStepsModule,
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
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MovieDetailComponent, SearchComponent, HomeComponent, MoviesTopRatedComponent, MoviesPopularComponent, MoviesNowPlayingComponent, MoviesUpcomingComponent]
})
export class AppModule { }
