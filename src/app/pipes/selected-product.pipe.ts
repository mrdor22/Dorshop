import { Pipe, PipeTransform} from '@angular/core';
import  { Product } from '../../app/Classes/product';


@Pipe ({
    name: 'selectedProduct'
})

export class selectedProduct implements PipeTransform{
transform(allProducts: Product[], productName: string): any {
    return allProducts.filter(p=>p.name === productName)
}
}

