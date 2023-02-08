import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponentComponent, children: [
      { path: 'products', component: ProductsComponentComponent },
      { path: 'products/:id', component: ProductDetailComponentComponent },
      { path: 'offers', component: OffresEmploiComponentComponent },
      { path: 'articles', component: ArticlesComponentComponent },
    ]
  },
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
