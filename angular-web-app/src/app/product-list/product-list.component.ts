import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = false; // Add a boolean flag for loading state

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true; // Set loading to true initially
    this.productService.products$.subscribe(data => {
      this.products = data;
      this.isLoading = false; // Set loading to false after data arrives
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}