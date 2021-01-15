import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie.class';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAdd(name: string, link: string, orther: string) {
   const movie = new Movie(1, name, link, orther);
   this.movieService.addMovie(movie);
   // console.log(name);
  }
}
