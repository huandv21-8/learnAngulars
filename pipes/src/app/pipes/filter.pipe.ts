import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], id?: string, name?: string): any {
    if (id && name) {
      return products;
    } else {
      if (id) {
        products = products.filter(x => {
          // tslint:disable-next-line:triple-equals
          return x.id.toString().indexOf(id) != -1;
        });
      }
      if (name){
        products = products.filter(x => {
          // tslint:disable-next-line:triple-equals
          return x.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) != -1;
        });
      }
    }

    return products;
  }

}
