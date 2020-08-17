import { Component, OnInit, OnDestroy, Output, ViewChild, ElementRef, } from '@angular/core';
import { ProductsService } from '../../../app/Services/products.service';
import { Router, RouterModule} from '@angular/router';

import { Product } from '../../../app/Classes/product';
import { CartService} from '../../../app/Services/cart.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { cartItem } from 'app/Classes/cartItem';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit{
  @ViewChild('aboutus') aboutusLink: ElementRef;
dorList: Product[] = [];
// @Output() productWasSelected = new EventEmitter<Product>();
term: any;
price: number;
url: '../../assets/data.json';
private myData =  new Subscription;
// @ViewChild('nameRef') nameElementRef: ElementRef;


constructor(private service: ProductsService, private router: Router,
  private cart: CartService,private productS: ProductsService,
  private loadingBar: LoadingBarService,
  private http: HttpClient,
  private store: Store<{ mycount: number}>) {


   }



  ngOnInit(): void {

    this.dorList = this.service.getProducts();

    this.myData = this.productS.getJSON().subscribe(data => this.dorList = data);

  console.log(this.dorList  );





  //   this.dorList = this.service.getProducts();
  //  console.log(this.dorList);

    // subscribe to publishershowAllProducts
    // const ProductObserverAble = this.service.getProducts();
    // ProductObserverAble.subscribe((newData: myList[]) =>{
    //   this.dorList = newData;
    //   complete: console.log("Operation completed!");
    //   error: console.log("Operation Error");
    //   next: console.log("Operation Next");
    // })
    // this.sharedService.currrentData.subscribe(x=> this.data = x);
    // }
    // gotoPage(){
    //   this.sharedService.trick({product: 'Heyyyyy'});
    //   var Buttons = document.querySelectorAll("buttons");
    //   console.log(Buttons);
    // }

}



// public gotoProductDetails(pname) {

//   this.router.navigate(pname).then( (e) => {
//     if (e) {
//       console.log("Navigation is successful!");
//       window.scrollTo(0,0);
//        console.log()
//        this.getProductDetails(pname)
//     }else{
//       console.log("Navigation has failed!");
// }
//   });
// }

public scrollToShop(){
  document.getElementById("shop").scrollIntoView({behavior: "smooth"});
}

public getProductDetails(name){
  this.dorList.forEach((name)=>{
    console.log(this.dorList);
  })
}

// onProductSelected(product: Product) {
// this.productWasSelected.emit(product)
// }

clearSearchTab(){
  this.term = '';

}
startLoading() {
  this.loadingBar.start();
}

add() {
  this.store.dispatch({type: "addITEM"})
}

sub() {
  this.store.dispatch({type: "subITEM"})

}


ngOnDestroy() {

  this.myData.unsubscribe();

}
}
