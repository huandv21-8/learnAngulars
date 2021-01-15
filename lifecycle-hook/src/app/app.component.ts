import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle-hook';
  tong!: number;
  a !: number;
  b !: number;

  total(): void {
    this.tong = this.b + this.a;
  }
}
