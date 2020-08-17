import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Classes/product';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(product: Product[], price: number): unknown {
    return product.filter(x=>x.price > price)
  }

}
