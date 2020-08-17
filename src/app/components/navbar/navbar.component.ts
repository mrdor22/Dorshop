import { Component, OnInit, Input, ViewChild, ElementRef, } from '@angular/core';
import { ProductsService } from '../../../app/Services/products.service';
import { FilterPipe } from '../../../app/pipes/filter.pipe';
import { Product } from '../../Classes/product';
import { OffcanvasService } from '../../Services/offcanvas.service';
import { ViewportScroller } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [FilterPipe],
})
export class NavbarComponent implements OnInit {
  public _opened: boolean = false;
@Input() count: number;
term: any;
myCount: Observable<number>
arrayOfProducts: Product[] = [];
public opened: boolean = false;

  constructor(private productService: ProductsService,
     private filter: FilterPipe,
     private viewPort: ViewportScroller,
     private offService: OffcanvasService,
     private store : Store<{counterData: { mycount: number}}>)
      {
   }






  ngOnInit() {


    // this.arrayOfProducts = this.productService.getProducts();
    // console.log(this.arrayOfProducts);

  }

  clearSearchTab(){
    this.term = '';
  }


  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  //  toSearch(){
  //    document.getElementById("search").scrollIntoView({behavior: 'smooth'});
  //  }

}
