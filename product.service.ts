import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

   constructor() {}

   

    // Get all products
    getAllProducts(): Product[] {
      
      let product1 = new Product("Iphone11", "Apple", "newest apple phone", 1000)
      let product2 = new Product("Samsung10", "Samsung", "newest samsung phone", 900)

      return new Array(product1, product2)
      
     
   
   }

}
