import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd} from '@angular/router';
import { CartService} from '../../../app/Services/cart.service';
import { Product } from '../../../app/Classes/product';
import { Observable } from 'rxjs';
import { cartItem } from '../../Classes/cartItem';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{
@Input() product: Product;
@Input() productId: any;
@Input() productName: any;
@Input() shoes: any;
count: number = 1;
public Product: Product;
public name: any;
public productnewId;
public selectedProduct: any
  public xnumber: number ;
   public id: any;
   public sub: any;
   public pro: number;
   public url: any;
   public currentUrl: string = '/products/';
   public dor: any;
  products: Product[];
  constructor(
    private location: Location,
    private router:Router,
    private cart: CartService,
    private route: ActivatedRoute,
    private productService: ProductsService,
    )
    {
      this.products = productService.getProducts()
      this.productId = productService.getProductIds();
      this.productName = productService.getProductsName();
   this.dor = this.productName.map(({ product }) => product);
   console.log(this.dor);



      // this.shoes = productService.getSuggestedProducts();
    }
    ngOnInit() {



      this.productService.getJSON().subscribe(data => this.products = data);
      console.log(this.products);




      console.log(this.product);
      console.log(this.productName);

      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0,0);
      });
       this.route.params.subscribe(params => {

          this.name = params['name'];
          let nameIndex = this.name;
        });

        this.productName
  }

    addToCart(sproduct: Product) {
     this.product = this.productService.getProducts().find(x=> x.id === this.id)
     console.log(this.product);
     this.product = sproduct;
     this.cart.addItem(new cartItem(sproduct,this.count))
    }

    increaseAmount() {
      this.count +=1;

    }

    decreaseAmount() {
    this.count -=1;
    if ( this.count === 0) {
      this.count = 1;
    }
    }



  }
  //  addItemToCart(){
  //    this.cart.addItem(new cartItem(this.product,1))
  //  }


  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }

