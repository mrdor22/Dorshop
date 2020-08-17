

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
transform(products: any, term: any): any {
  if(term === undefined || term === '') return products;
  return products.filter(function(product) {
    return product.name.toLowerCase().includes(term.toLowerCase())
  })
}
}
