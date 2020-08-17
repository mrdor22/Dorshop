import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule  } from '@angular/material/slider';
import { MatSidenavModule, MatSidenav  } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { BestComponent } from './components/best/best.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { CartComponent} from './components/cart/cart.component'
import { ProductsService } from './Services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { selectedProduct } from './pipes/selected-product.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { TrustedComponent } from './components/trusted/trusted.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SidebarModule } from "ng-sidebar";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { ContentComponent } from './components/content/content.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PriceFilterPipe } from './price-filter.pipe';
import { ShopComponent } from './shop/shop.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/Reducer';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ContactComponent,
    ProductGridComponent,
    DividerComponent,
    FooterComponent,
    BestComponent,
    SubscribeComponent,
    CartComponent,
    ProductItemComponent,
    ProductInfoComponent,
    selectedProduct,
    FilterPipe,
    AboutComponent,
    SliderComponent,
    CarouselComponent,
    NewProductComponent,
    TrustedComponent,
    SidebarComponent,
    ProductTitleComponent,
    ContentComponent,
    CheckoutComponent,
    PriceFilterPipe,
    ShopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    SidebarModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgbModule,
    ScrollToModule.forRoot(),
    LoadingBarModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    MatSidenavModule,
    StoreModule.forRoot({ cart: reducer })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
