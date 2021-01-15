import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-interaction';
  name = "huandv";
  age = 19;
  isCheck = false;
  getDataFromChildren!: string;
  getDataAge!: number;


  users = [
    {
      ten: "huandv",
      tuoi: 19
    }, {
      ten: "huandv1",
      tuoi: 18
    }, {
      ten: "huandv2",
      tuoi: 17
    }, {
      ten: "huandv3",
      tuoi: 16
    }
  ]
  onGetFullname(value: string) {
    this.getDataFromChildren = value;
  }
  onGetAge(value: number) {
    this.getDataAge = value;
  }

}
