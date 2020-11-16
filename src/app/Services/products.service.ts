import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product} from '../Classes/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = "../../assets/data.json";


  products: Product[] = [
    new Product("Shoes Loue V","By Italian design","This is the most comfy shoes  you'll ever wear",200,250,1,'../../assets/product_1.jpg'),
    new Product("Bag","New summer bag!","This backpack given a modren appearance,With a front pocket,a comompartment and a laptop room",55,80,2,'../../assets/product_2.jpg'),
    new Product("Belt","Brand new belt"," Alot of features included: Pure leather, Shape & Fit, 3.6CM, etc..",20,35,3,'../../assets/product_3.jpg'),
    new Product("Jeans","Levi's new collection","Perfect for those busy days when comfort is the key, super soft jeans in best fit, extra comfy guaranteed",150,220,4,'../../assets/jeans1.jpg'),
    new Product("Hat","New Hat","At home in the urban jungle, our versatile baseball cap is a great addition to any wardrobe or combat rig. With a durable and stylish design, this cap offers casual sun protection. A velcro tightening system ensures you find the perfect fit, keeping your cap secure even when running.",70,100,5,'../../assets/product_4.jpg'),
    new Product("Scarf","Limited scarf editions", "This 100% silk scarf is a wearable piece of art with non-repeating design. It is elegant, luxuriously soft to the touch, light and comfortable,Each scarf is printed with the original artwork hand-painted by master of design, and handled individually with care and finely finished with a hem.",30,40,6,'../../assets/product_5.jpg'),
    new Product("Jacket", 'Brand new jacket' ,"Men's hooded jacket from The North Face. Cut from lightweight ripstop fabric and packed with 600 down fill for extra warmth, the 'La Paz' features an elasticated hood, central zip fastening and adjustable hem for tailored insulation. Complete with two hand warmer pockets and signature branding to the chest and rear right shoulder. The compact coat packs away into its own pocket for carrying convenience."
    ,120,150,7,'../../assets/product_6.jpg'),
    new Product("Flip-Flop","New 2020 Summer flip-flop","A sparkling crystal corsage and a platform wedge sole elevate the look of a super-comfortable flip-flop.",50,70,8,'../../assets/product_7.jpg'),
    new Product("Gucci heels","By Italian design","This is very unique ladies heels, This gorgeous heel features an open toe silhouette",200,250,9,'../../assets/shoes_1.jpg'),
    new Product("Nike  Air","Nike's new collection","Perfect for those training when comfort is the key, super soft shoes in best fit, extra comfy guaranteed",150,220,10,'../../assets/shoes_2.jpg'),
    new Product("Air Jordan","Brand new Jordans sneakers","A legit item, Alot of features included: Pure leather, Shape & Fit, lightness, etc..",90,110,11,'../../assets/shoes_3.jpg'),
    new Product("Blue Asics","Brand new Asics shoes","Asics is a Japanese multinational corporation which produces footwear and sports equipment designed for a wide range of sports.",70,85,12,'../../assets/shoes_4.jpg'),

  ];

  constructor(private http: HttpClient) {


this.http.get(this.url).toPromise().then(data => {

})
   }

  getProducts(): Product[] {
    return this.products;
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.url)
  }



  getProductIds() {
    return this.products.map((x=>x.id));
  }

  getProductsName() {
    return this.products.map((f=>f.name));

    }


  }




// using Subject create cart
  // constructor() { }




// findAll(): myList[] {
//   return this.products;
// }
// find(id: number): myList {
//   return this.products[this.getSelectedIndex(id)];
// }

// private getSelectedIndex(id: number) {
//   for (var i = 0; i < this.products.length;i++) {
//     if (this.products[i].id === id) {
//       return i
//     }
//   }
//   return -1;
// }
// router: Router;


// create observable object = publisher ( server side  )
//  showAllProducts() : any  {
// const myProductObservable = new Observable(observer => {
// setTimeout(() => {
//   observer.next(this.products);
//   observer.complete();
// },1000);
// });
// return myProductObservable;

// }
