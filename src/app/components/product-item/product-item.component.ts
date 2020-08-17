
import { MessangerService} from '../../Services/message.service';
import { Component, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../app/Services/products.service';
import { Input } from '@angular/core';
import { Product } from '../../Classes/product';
import { CartService} from '../../../app/Services/cart.service';
import { cartItem } from '../../Classes/cartItem';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Store } from '@ngrx/store';
import * as Cart from "../../store/actions";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productItem: Product;
public selected: any;
@Input() product: any;
liked: boolean = false;
  constructor(private msg: MessangerService,
    private cart: CartService,private router: Router,
    private productS: ProductsService, private loadingBar: LoadingBarService,private store : Store<any>,private msga: ToastrService) { }

  ngOnInit() {
  }

addToCart() {
  this.cart.addItem(new cartItem(this.productItem,1))


  console.log(this.cart)
  this.startLoading();

    this.msg.sendMsg(this.productItem);
    this.endLoading();
  }

  removeFromCart() {
    this.msg.sendMsg(this.productItem)
  }

  startLoading() {
    this.loadingBar.set(100)
  }

  endLoading() {
    this.loadingBar.stop();
  }

  clickEvent(){
    this.liked = !this.liked;
}

// public action(product: Product) {
// this.product = this.msg.sendMsg(this.productItem)
// }

ngAddToCart() {
  this.store.dispatch(new Cart.AddProduct(this.productItem))
  this.msga.success("Succesfully added to the cart" + this.productItem.name)
}

// public gotoProductDetails(pname) {

//   this.router.navigate(pname).then( (e) => {
//     if (e) {
//       console.log("Navigation is successful!");
//       window.scrollTo(0,0);
//       document.querySelector('body').scrollTo(0,0);


//     }else{

//       console.log("Navigation has failed!");
// }


//   });
// }


}
