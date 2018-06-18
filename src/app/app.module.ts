// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material & flex imports
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MovieDetailComponent, SearchComponent, HomeComponent]
})
export class AppModule { }
