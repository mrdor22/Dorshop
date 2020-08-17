import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MessangerService} from '../../Services/message.service';
import { Product } from '../../Classes/product';
import { ToastrService} from 'ngx-toastr';
import { CartService} from '../../../app/Services/cart.service';
import { cartItem } from '../../Classes/cartItem';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as Cart from "../../store/actions";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartSubscription: Subscription;
public items: cartItem[];
public itemsInCart: any;
count: Observable<number>;
myCart: Observable<Array<any>>;

  public cartTotal: number
  constructor(private msg: MessangerService, private toastr: ToastrService, private cart: CartService,private r: Router,
    private store : Store<any>) {
      this.myCart = this.store.select('cart');
      this.myCart.forEach((x) => x.length)
     }

  ngOnInit() {


this.items = this.cart.getItems();
this.cartTotal = this.cart.getTotal()
this.cartSubscription = this.cart.itemsChanged.subscribe((items: cartItem[])=>{
  this.items = items;
  this.cartTotal = this.cart.getTotal();
  this.itemsInCart = this.items;
  console.log(this.itemsInCart);




})

  }




  public onClearCart(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.cart.clearCart();

  }

  public decreaseAmount(item: cartItem) {
    const newAmount = item.amount === 1 ? 1 : item.amount - 1;
    this.cart.updateItemAmount(item, newAmount);
  }

  public increaseAmount(item: cartItem) {
    this.cart.updateItemAmount(item, item.amount + 1);
  }

   public remove(item: cartItem) {
     this.cart.removeItem(item);
      sessionStorage.setItem('items',this.itemsInCart)
   sessionStorage.getItem('items');

   }

   toCheckout(){
     this.r.navigate(['/checkout']);
   }

   removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product))
  }


}
