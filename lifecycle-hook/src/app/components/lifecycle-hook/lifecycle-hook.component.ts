import {Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log('component: ');
  }

  @Input('total') totaal!: number;
  tongCu!: number;

  ngOnInit(): void {
    console.log('onInit: ');
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log('ngOnchange: ');
    console.log(simpleChanges);
    this.tongCu = simpleChanges.totaal.previousValue;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: ');
  }


}
