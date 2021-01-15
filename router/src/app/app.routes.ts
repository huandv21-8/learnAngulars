import {Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {ProductDetailComponent} from './components/pages/product-detail/product-detail.component';
import {LoginComponent} from './components/pages/login/login.component';
import {AuthGuard} from './service/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      // {
      //   path: '',
      //   component: ProductsComponent
      // }

    ]
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
];
