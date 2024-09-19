import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1', imageUrl: '/assets/img/product1.jpg' },
    { id: 2, name: 'Product 2', price: 150, description: 'Description 2', imageUrl: '/assets/img/product2.jpg' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
