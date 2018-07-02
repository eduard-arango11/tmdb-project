// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';

// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailCastComponent } from './components/movies/movie-detail-cast/movie-detail-cast.component';
import { MovieDetailCrewComponent } from './components/movies/movie-detail-crew/movie-detail-crew.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SearchComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailCastComponent,
    MovieDetailCrewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MovieDetailComponent, SearchComponent, HomeComponent,MoviesListComponent, MovieDetailCastComponent, MovieDetailCrewComponent]
})
export class AppModule { }
