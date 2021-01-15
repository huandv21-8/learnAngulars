import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Api = 'https://5fe56a404b7a600017227c57.mockapi.io/api/works';

  constructor() { }
}
