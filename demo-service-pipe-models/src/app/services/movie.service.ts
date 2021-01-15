import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    new Movie(1, 'abc', 'https://www.youtube.com/watch?v=ZBHjXFDAVuc&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=32', 'huandv'),
    new Movie(2, 'radio', 'https://www.youtube.com/watch?v=ZBHjXFDAVuc&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=32', 'long')
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getAllMovie() {
    return this.movies;
  }

  // tslint:disable-next-line:typedef
  addMovie(movie: Movie) {
    movie.id = this.getLastId(this.movies) + 1;
    this.movies.push(movie);
  }

  // tslint:disable-next-line:typedef
  getLastId(movies: Movie[]) {

    let id = movies.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else if (b.id < a.id) {
        return 1;
      } else {
        return 0;
      }
    })[0].id;
    console.log(id);
    return id;
  }

}
