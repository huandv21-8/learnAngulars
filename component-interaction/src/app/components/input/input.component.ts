import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

// @Input("name") name!: string ;
@Input("age") age!: number ;
@Input("isCheck") isCheck!: boolean ;
@Input("users") users!: any[];

private _name! : string;
  constructor() { }

  ngOnInit(): void {
  }


  // lấy dữ liêu từ component cha theo kiểu oop (get,set)
  @Input()
  set name1(name : string){
    this._name = name
  }
   get name1() {
    return this._name;
  }
  
}
