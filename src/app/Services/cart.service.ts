import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { cartItem } from '../../app/Classes/cartItem';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'app/Classes/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemsChanged: EventEmitter<cartItem[]> = new EventEmitter<cartItem[]>();
  private cartItems: cartItem[];
messageSent = false;
public count = 0;
  constructor(private msg: ToastrService) {
    this.cartItems = [];
  }
  public getItems() {
    return this.cartItems.slice();
  }

public getItemIds() {
    return this.getItems().map(cartItem => cartItem.product.id);
  }

 public addIndex(item: cartItem){

 }
  public add(item: any) {
    this.cartItems.push(item);
  }
  public addItem(item: cartItem) {

    // If item is already in cart, add to the amount, or push item to cart
    if (this.getItemIds().includes(item.product.id)) {
      this.cartItems.forEach(function (cartItem) {
        if (cartItem.product.id === item.product.id) {
          cartItem.amount += item.amount;
        }
        });

      this.msg.info('Amount in cart changed for: ' + item.product.name);
    } else {
      this.cartItems.push(item);
      this.msg.info('Added to cart: ' + item.product.name );
    }

    this.itemsChanged.emit(this.cartItems.slice());
    this.count = this.count +1;
    return this.count
  }
  public addItems(items: cartItem[]) {
    items.forEach((cartItem) => {
      this.addItem(cartItem);
    });
  }

  public removeItem(item: cartItem) {
    const indexToRemove = this.cartItems.findIndex(element => element === item);
    this.cartItems.splice(indexToRemove, 1);
    this.itemsChanged.emit(this.cartItems.slice());
    this.msg.info('Deleted from cart: ' + item.product.name  );
  }

  public updateItemAmount(item: cartItem, newAmount: number) {
    this.cartItems.forEach((cartItem) => {
      if (cartItem.product.id === item.product.id) {
        cartItem.amount = newAmount;
      }
    });
    this.itemsChanged.emit(this.cartItems.slice());
    this.msg.info('Updated amount for: ' + item.product.name);
  }

  public clearCart() {
    this.cartItems = [];
    this.itemsChanged.emit(this.cartItems.slice());
    this.msg.info('Cleared cart');
    return this.count = 0;
  }

  public getTotal() {
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      total += cartItem.amount * cartItem.product.price;
    });
    return total;
  }


}


