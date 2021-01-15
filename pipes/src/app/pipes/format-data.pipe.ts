import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    // console.log(args);
    return value.substr(0, args) + "...";
  }

}
