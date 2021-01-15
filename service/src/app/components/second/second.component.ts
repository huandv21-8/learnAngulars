import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _loggingService: LoggingService) {
  }

  ngOnInit(): void {
  }

  onLogging(): void {
    this._loggingService.logging();
  }

}
