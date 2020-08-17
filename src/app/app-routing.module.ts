import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'products/:name', component:ProductInfoComponent},
  {path: 'Cart', component:CartComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'shop', component:ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'}),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
