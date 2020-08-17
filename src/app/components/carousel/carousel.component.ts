import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductsService } from '../../../app/Services/products.service';
import { Product } from '../../Classes/product';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  data: Product[] = [];
demoNumber = 1;

  constructor(private config: NgbCarouselConfig,private ps: ProductsService) {
    config.interval = 2500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
   }
  ngOnInit(): void {

    this.data = this.ps.getProducts();
    console.log(this.data);


  }

}
