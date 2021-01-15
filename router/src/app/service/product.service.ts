import {Injectable} from '@angular/core';
import {ProductClass} from '../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: ProductClass[] = [
    {
      _id: 1,
      _name: 'iphone 7',
      _price: 100000,
      _status: false
    },
    {
      _id: 2,
      _name: 'oppo',
      _price: 300000,
      _status: true
    },
    {
      _id: 3,
      _name: 'iphone 9',
      _price: 200000,
      _status: false
    }
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getAllProduct(name?: string, price?: number) {
    let result: ProductClass[] = this.products;
    if (name) {
      result = this.products.filter(x => {
        return x._name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }

    if (price) {
      result = this.products.filter(x => {
        // tslint:disable-next-line:triple-equals
        return x._price == price;
      });
    }
    // if (!name && !price) {
    //   return this.products;
    // }

    return result;

  }

  getProductById(id: number) {
    let result = null;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (id == this.products[i]._id) {
        result = this.products[i];
        break;
      }
    }
    return result;
  }
}
