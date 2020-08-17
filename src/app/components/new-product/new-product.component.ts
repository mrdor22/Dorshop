import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../app/Services/products.service';
import { Product } from '../../Classes/product';
import { CartService} from '../../Services/cart.service';
import { cartItem } from '../../Classes/cartItem';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Input() productItem: Product;
  public selected: any;
  @Input() product: any;
    constructor(
      private cart: CartService,private productS: ProductsService) { }

    ngOnInit() {
    }

  addToCart() {
    this.cart.addItem(new cartItem(this.productItem,1))



    }

}
