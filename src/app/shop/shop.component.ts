import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
dorList: any[] = [];
price: number;
  constructor(private ser: ProductsService) { }

  ngOnInit(): void {
    this.dorList = this.ser.getProducts();
  }

}
