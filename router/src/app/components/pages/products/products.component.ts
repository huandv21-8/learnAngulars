import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ProductClass} from '../../../models/product.class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList!: ProductClass[];
  name!: string;
  price!: number;

  constructor(private productService: ProductService,
              private routerService: Router,
              private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(data => {
      let name = data.name;
      let price = data.price;
      console.log( name);
      this.productList = this.productService.getAllProduct(name, price);
    });
  }

  onSearch() {
    this.routerService.navigate(['/products'], {queryParams: {name: this.name, price: this.price}});
  }

  getData(){
    this.activateRoute.queryParams.subscribe(data => {
      let name = data.name;
      let price = data.price;
      console.log( name);
      this.productList = this.productService.getAllProduct(name, price);
    });
  }

}
