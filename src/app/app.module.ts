import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    NavbarComponentComponent,
    ProductsComponentComponent,
    PageNotFoundComponentComponent,
    HomeComponentComponent,
    ProductDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
