import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  txtFullname! :string ;
  txtAg = 19;

  @Output("txtAg") sendAge = new EventEmitter<number>();
  @Output("txtfullname") onHandleFullname = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.txtFullname);
    this.sendAge.emit(this.txtAg);
    this.onHandleFullname.emit(this.txtFullname);
  }
}
