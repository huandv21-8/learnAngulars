import {Pipe, PipeTransform} from '@angular/core';
import 'lodash';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: number[], thamso?: boolean): any {

    thamso ?
      value.sort((a, b) => {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      })
      // value = _.sortBy(value, [iteratees = [_.identity]])
      :
      value.reverse();
    return [...value]; // tạo và return mảng mới.
  }

}
