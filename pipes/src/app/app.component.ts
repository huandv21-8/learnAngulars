import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = 'huandv rat dep trai HHHH';


  number = 19;
  totalMoney = 171364788;
  today: Date = new Date();
  txtId?: string;
  txtName?: string;
  thamso = true;
  sos = [1, 2, 3, 4, 7, 5];

  products = [
    {
      id: 1,
      name: 'huan'
    }, {
      id: 2,
      name: 'long'
    }, {
      id: 3,
      name: 'phuong'
    }, {
      id: 4,
      name: 'quy'
    }, {
      id: 5,
      name: 'phu'
    },
    {
      id: 19,
      name: 'phu'
    }
  ];

  sort1(): void {
    this.thamso = !this.thamso;
    // console.log(this.thamso);
  }




}
