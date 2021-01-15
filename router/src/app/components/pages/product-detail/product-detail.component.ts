import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {ProductClass} from '../../../models/product.class';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy{

  productDetail!: ProductClass;
  public  subscription!: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {

    // this.handleParamsRouteBySnapshot();
    this.handleParams();
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }


  // tslint:disable-next-line:typedef
  handleParams() {
   this.subscription = this.activateRoute.params.subscribe(data => {
      // @ts-ignore
      this.productDetail = this.productService.getProductById(data.id);
    });
  }

  // tslint:disable-next-line:typedef
  handleParamsRouteBySnapshot() {
    // @ts-ignore
    this.productDetail = this.productService.getProductById(this.activateRoute.snapshot.params.id);
  }


}
