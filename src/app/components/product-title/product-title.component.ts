import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent implements OnInit {
  @Input() public title: string;
  @Input() public children: {title: string, link: string}[];
  constructor() { }

  ngOnInit(): void {
  }

}
