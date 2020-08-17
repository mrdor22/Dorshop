import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private scrollToService: ScrollToService) { }

  triggerScrollTo() {
  
    const config: ScrollToConfigOptions = {
      container: 'custom-container',
      target: 'destination',
      duration: 650,
      easing: 'easeOutElastic',
      offset: 20
    };

    this.scrollToService.scrollTo(config);
  }
}

