import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

target: '';
  images = ['../../../assets/hero-1.jpg','../../../assets/slide-03.jpg','../../../assets/slide-04.jpg']



  constructor(private config: NgbCarouselConfig) {
    config.interval = 2500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
   }

  ngOnInit(): void {
  }



//   scroll(el: HTMLElement) {
//     el.scrollIntoView();
// }

}
