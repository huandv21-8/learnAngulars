import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {HomeComponent} from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import {appRoutes} from './app.routes';
import {ProductService} from './service/product.service';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/pages/login/login.component';
import {AuthGuard} from './service/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [
    ProductService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
