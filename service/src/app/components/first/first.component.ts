import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _loggingService: LoggingService) {

  }

  ngOnInit(): void {
  }

  onLogging(): void {
   this._loggingService.logging();
  }

}
