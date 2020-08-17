import { Component } from '@angular/core';
import { Product } from './Classes/product';
import { OffcanvasService } from '../..//src/app/Services/offcanvas.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: Observable<Array<any>>
  public products: any;
  cartItems = [];
  title = 'dor30';
 selectedProduct: Product;
 public opened: boolean = false;

 constructor( public offService: OffcanvasService,private store: Store<any>) {

}
     ngOnInit() {

   this.cart =   this.store.select('cart'.length);



     }
  goToTop(section: any): void {
  console.log(section);
  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}





// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
