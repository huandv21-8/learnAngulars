import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MovieService} from './services/movie.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
